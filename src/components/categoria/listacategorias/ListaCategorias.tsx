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
import foto from "../../../../public/images/categoriasfotos/fundocategorias.png";
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
             <div className="bg-gray-100 min-h-screen relative overflow-hidden">
                <img
                    src={foto}
                    alt="Imagem de treino"
                    className="absolute top-0 left-0 w-full h-full object-cover sm:h-auto sm:max-h-screen"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        ESCOLHA SUA CATEGORIA
                    </h1>
                </div>
            </div>
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
