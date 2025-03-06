import { Link, useNavigate } from 'react-router-dom';
import Exercicio from '../../../models/Exercicio';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';


interface CardExercicioProps {
    exercicio: Exercicio;
    onDelete: () => void; 
    showActions?: boolean; 
}

function CardExercicio({ exercicio, showActions = true }: CardExercicioProps) {
 
    const Navigate = useNavigate();

    const { usuario} = useContext(AuthContext)

 
    return (
        <div className="relative flex flex-col w-full my-6 bg-white shadow-lg border border-slate-200 rounded-lg max-w-xs overflow-hidden">
            <div className="relative w-full h-56">
                <img
                    className="h-full w-full object-cover"
                    src="/images/exer_01.jpg"
                    alt="Imagem do exercício"
                />
            </div>

            <div className="p-5 flex flex-col items-center">
                <div className="flex justify-center rounded-full bg-teal-600 py-1 px-3 w-3/5 text-xs text-white">
                    {exercicio.categoria ? exercicio.categoria.tipo : 'Sem Categoria'}
                </div>

                <h4 className="m-2 text-slate-800 text-xl font-semibold">
                    {exercicio.nome}
                </h4>

                <p className="mb-4 text-slate-600 text-sm">
                    {exercicio.descricao}
                </p>

                <div className="text-sm text-slate-700 space-y-1">
                    <p><strong>Aparelho:</strong> {exercicio.aparelho}</p>
                    <p><strong>Séries:</strong> {exercicio.serie}</p>
                    <p><strong>Repetições:</strong> {exercicio.repeticao}</p>
                </div>

                {showActions && ( 
                    <div className="mt-4 flex gap-4">
                        {usuario.id===1 && 
                        <Link
                            to={`/editarexercicio/${exercicio.id}`}
                            className="text-teal-600 font-semibold text-sm hover:underline flex items-center"
                        >
                            Editar
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                        }
                        {usuario.id===1 &&
                        <Link
                            to={`/deletarexercicio/${exercicio.id}`} 
                            className="text-red-600 font-semibold text-sm hover:underline flex items-center"
                        >
                            Deletar
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </Link>
                        }
                        {usuario.id>1 &&
                            <div className='flex justify-center'>
                                <input className='w-8 h-8' type="checkbox"></input> <span className='pt-1 pl-2'>CONCLUÍDO</span>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardExercicio;
