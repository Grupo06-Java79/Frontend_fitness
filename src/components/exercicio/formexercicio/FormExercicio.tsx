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
        <div className="container flex flex-col items-center justify-center mx-auto py-10">
            <h1 className="text-4xl text-center my-8 font-bold">
                {id === undefined ? 'Cadastrar Exercício' : 'Editar Exercício'}
            </h1>

            <form className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md" onSubmit={gerarNovoExercicio}>
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="nome" className="block mb-1">Nome do Exercício</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome do exercício"
                            className="border border-gray-300 rounded w-full p-2"
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
                            className="border border-gray-300 rounded w-full p-2"
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
                            className="border border-gray-300 rounded w-full p-2"
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
                                className="border border-gray-300 rounded w-full p-2"
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
                                className="border border-gray-300 rounded w-full p-2"
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
                            className="border border-gray-300 rounded w-full p-2"
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
                            {/* Adicione outras opções conforme necessário */}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 flex justify-center"
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormExercicio;
