import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Exercicio from "../../../models/Exercicio";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function FormExercicio() {
    const navigate = useNavigate();
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>(); 

    async function buscarPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/exercicios`, exercicio, setExercicio, {
                    headers: { 'Authorization': token }
                });
                alert('O Exercício foi atualizado com sucesso!');
            } else {
                await cadastrar(`/exercicios`, exercicio, setExercicio, {
                    headers: { 'Authorization': token }
                });
                alert('O Exercício foi cadastrado com sucesso!');
            }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                alert(`Erro ao ${id !== undefined ? 'atualizar' : 'cadastrar'} o Exercício.`);
            }
        } finally {
            setIsLoading(false);
            navigate("/exercicios");
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <section
                className="text-center py-16 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/exercicio_topo.png')` }}>
                    
                <h2 className="text-4xl font-bold text-white p-3 brightness-70">
                    {id === undefined ? 'Cadastrar Exercício' : 'Editar Exercício'}
                </h2>
            

            <div className="flex justify-center w-full p-4">
                <div className="container max-w-2xl p-4 bg-white rounded-lg shadow-lg">
                    <form onSubmit={gerarNovoExercicio}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="nome" className="block mb-1">Nome do Exercício</label>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome do exercício"
                                    className="border border-gray-300 rounded w-96 p-2"
                                    value={exercicio.nome || ""}
                                    onChange={atualizarEstado}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="descricao" className="block mb-1">Descrição</label>
                                <input
                                    type="text"
                                    name="descricao"
                                    placeholder="Descreva o exercício"
                                    className="border border-gray-300 rounded w-96 p-2"
                                    value={exercicio.descricao || ""}
                                    onChange={atualizarEstado}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="aparelho" className="block mb-1">Aparelho</label>
                                <input
                                    type="text"
                                    name="aparelho"
                                    placeholder="Informe o aparelho utilizado"
                                    className="border border-gray-300 rounded w-96 p-2"
                                    value={exercicio.aparelho || ""}
                                    onChange={atualizarEstado}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="serie" className="block mb-1">Série</label>
                                    <input
                                        type="number"
                                        name="serie"
                                        placeholder="Número de séries"
                                        className="border border-gray-300 rounded w-60 p-2"
                                        value={exercicio.serie || ""}
                                        onChange={atualizarEstado}
                                        min={1}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="repeticao" className="block mb-1">Repetições</label>
                                    <input
                                        type="number"
                                        name="repeticao"
                                        placeholder="Número de repetições"
                                        className="border border-gray-300 rounded w-60 p-2"
                                        value={exercicio.repeticao || ""}
                                        onChange={atualizarEstado}
                                        min={1}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="categoria" className="block mb-1">Categoria</label>
                                <select
                                    name="categoria"
                                    className="border border-gray-300 rounded w-96 p-2"
                                    value={exercicio.categoria?.id || ""}
                                    onChange={(e) =>
                                        setExercicio({
                                            ...exercicio,
                                            categoria: { id: Number(e.target.value) } as Categoria,
                                        })
                                    }
                                >
                                    <option value="">Selecione uma categoria</option>
                                    <option value="1">Cardio</option>
                                    <option value="2">Força</option>
                                    <option value="3">Flexibilidade</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="text-teal-600 font-semibold text-sm flex items-center hover:underline"
                            >
                                {isLoading ? (
                                    <RotatingLines
                                        strokeColor="teal"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="16"
                                        visible={true}
                                    />
                                ) : (
                                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                                )}
                                {!isLoading && (
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
                                )}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            </section>
        </div>
    );
}

export default FormExercicio;
