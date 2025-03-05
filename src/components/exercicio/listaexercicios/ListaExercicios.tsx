import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";

function ListaExercicios() {
    const navigate = useNavigate();
    const [exercicio, setExercicio] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarExercicio() {
        try {
            await buscar('/exercicios', setExercicio, {
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
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarExercicio();
    }, [exercicio]);

    return (
        <>

            {/* Imagem com Texto Sobreposto */}
            <div className="relative w-full h-[50vh]">
                <img
                    src="images/exercicio_topo.png"
                    alt="Imagem mulheres praticando exercício"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-between">
                    <div className="absolute bottom-0 left-0 mb-4 ml-20 text-white text-8xl md:text-7xl sm:text-5xl font-bold">
                        Exercícios
                    </div>
                </div>
            </div>


            {/*  Lista de Exercícios */}
            <div className="flex justify-center w-full w-1/2 bg-[#CEF9A9]">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exercicio.map((exercicio) => (
                            <CardExercicio key={exercicio.id} exercicio={exercicio} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaExercicios;
