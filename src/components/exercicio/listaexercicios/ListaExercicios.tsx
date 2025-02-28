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
        buscarExercicio()
    }, [exercicio])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8">
                        {exercicio.map((exercicio) => (
                            <CardExercicio key={exercicio.id} exercicio={exercicio} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaExercicios