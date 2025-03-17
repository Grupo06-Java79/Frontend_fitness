import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardCategoria from "../cardcategoria/CardCategoria";
import CardCategoria2 from "../cardcategoria/CardCategoria2";
import CardCategoria3 from "../cardcategoria/CardCategoria3";
import CardCategoria4 from "../cardcategoria/CardCategoria4";
import CardCategoria5 from "../cardcategoria/CardCategoria5";
import CardCategoria6 from "../cardcategoria/CardCategoria6";
import Exercicio from "../../../models/Exercicio";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaCategorias() {
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarExercicio() {
        try {
            await buscar('/exercicios', setExercicios, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado","alerta");
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarExercicio();
    }, []);

    return (
        <>
            <section className="text-center py-64 bg-cover bg-center"
                style={{ backgroundImage: `url('../../../../public/images/categoriasfotos/fundocategorias.png')` }}>

                <h1 className="text-5xl font-bold text-white brightness-70">
                    Escolha sua categoria
                </h1>
            </section>
            {/* Título no topo da página */}
            <div className="bg-[#CEF9A9]">

                {/* Grid de Exercícios */}
                <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl my-10 justify-items-center">
                        <CardCategoria5 />
                        <CardCategoria6 />
                        <CardCategoria />
                        <CardCategoria2 />
                        <CardCategoria3 />
                        <CardCategoria4 />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;
