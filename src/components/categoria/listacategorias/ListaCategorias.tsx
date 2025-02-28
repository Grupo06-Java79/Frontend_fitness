import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria"

function ListaCategorias() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
        const token = usuario.token;

    async function buscarCorridas() {
        try {
            await buscar('/categorias', setCategoria, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCorridas()
    }, [categoria])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8">
                        {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias