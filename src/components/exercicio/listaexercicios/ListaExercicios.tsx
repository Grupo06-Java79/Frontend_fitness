import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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
            ToastAlerta("Você precisa estar logado","alerta");
            navigate('/');
        } else {
            buscarExercicio(); 
        }
    }, [token]); 

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <section 
                    className="text-center py-52 bg-cover bg-center" 
                    style={{ backgroundImage: `url('images/exercicio_topo.png')` }}
                >
                        <h2 className="text-5xl font-bold text-white mb-4 brightness-70">
                            EXERCITE - SE                    
                        </h2>
                        <p className="text-white text-lg mt-4 max-w-4xl text-center mx-auto">
                            Exercite bons hábitos, exercite bons pensamentos, exercite disciplina, EXERCITE-SE! 
                        </p>

                    <div className="mx-auto brightness-80"></div>
                </section>

                {/* Lista de Exercícios */}
                <div className="flex justify-center bg-[#CEF9A9] pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exercicio.length > 0 ? (
                            exercicio.map((exercicio) => (
                                <CardExercicio key={exercicio.id} exercicio={exercicio} onDelete={function (): void {
                                    throw new Error("Function not implemented.");
                                } } />
                            ))
                        ) : (
                            <p>Carregando exercícios...</p>
                        )}
                    </div>
                    
            </div>
        </div>    
        
        
        
        </>
    );
}

export default ListaExercicios;
