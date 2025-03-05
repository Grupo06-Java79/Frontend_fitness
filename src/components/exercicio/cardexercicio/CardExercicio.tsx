import { Link } from 'react-router-dom';
import Exercicio from '../../../models/Exercicio';
import { deletar } from '../../../services/Service';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardExercicioProps {
    exercicio: Exercicio;
    onDelete: () => void; // Função para atualizar a lista ao deletar
}

function CardExercicio({ exercicio, onDelete }: CardExercicioProps) {
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    async function handleDelete() {
        if (window.confirm(`Deseja realmente excluir o exercício "${exercicio.nome}"?`)) {
            try {
                await deletar(`/exercicios/${exercicio.id}`, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Exercício excluído com sucesso!');
                onDelete(); // Atualiza a lista de exercícios após a exclusão
            } catch (error) {
                alert('Erro ao excluir o exercício. Tente novamente.');
            }
        }
    }

    return (
        <div className="relative flex flex-col w-full my-6 bg-white shadow-lg border border-slate-200 rounded-lg max-w-xs overflow-hidden">
            {/* Imagem Grande no Topo */}
            <div className="relative w-full h-56">
                <img
                    className="h-full w-full object-cover"
                    src="images/exer_01.jpg"
                    alt="Imagem do exercício"
                />
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6 flex flex-col justify-between">
                <div className="mb-4 rounded-full bg-teal-600 py-1 px-3 text-xs text-white w-max">
                    {exercicio.categoria ? exercicio.categoria.nome : 'Sem Categoria'}
                </div>

                <h4 className="mb-2 text-slate-800 text-xl font-semibold">
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

                {/* Botões de ação */}
                <div className="mt-4 flex gap-4">
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

                    <button
                        onClick={handleDelete}
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
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardExercicio;
