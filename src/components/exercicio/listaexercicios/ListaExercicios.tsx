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
        } else {
            buscarExercicio(); 
        }
    }, [token]); 

    return (
        <div className="w-full min-h-screen flex flex-col bg-[#CEF9A9]">
        
            {/* Imagem com Texto Sobreposto */}
            <section 
                    className="text-center py-52 bg-cover bg-center" 
                    style={{ backgroundImage: `url('images/exercicio_topo.png')` }}
                >
                        <h2 className="text-5xl font-bold text-white mb-4 brightness-70">
                            EXERCITE - SE                    
                        </h2>
                        <p className="text-white text-lg mt-4 max-w-3xl text-center mx-auto">
                            Exercite Bons Hábitos 😊, Exercite Bons Pensamentos 🧘‍♀️, Exercite Disciplina 💪, EXERCITE-SE! ⛹️‍♂️
                        </p>

                    <div className="mx-auto brightness-80"></div>
                </section>

        <div className="w-full bg-[#CEF9A9]">
            {/*  Lista de Exercícios */}
            <div className="w-full flex justify-center my-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exercicio.map((exercicio) => (
                            <CardExercicio key={exercicio.id} exercicio={exercicio} />
                        ))}
                    </div>
                    
            </div>
        </div>    
        
        
        </div>
        
    );
}

export default ListaExercicios;
