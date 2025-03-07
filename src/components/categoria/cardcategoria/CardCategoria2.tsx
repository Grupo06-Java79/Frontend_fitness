import { useNavigate } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";

interface CardExercicioProps {
    exercicio?: Exercicio;  // Torna o prop opcional para evitar erro
}

export default function CardExercicio({ exercicio }: CardExercicioProps) {
    const navigate = useNavigate();

    // Lista de exercícios recomendados
    const exercicios = [
        "Simulador de Caminhada",
        "Esqui Simulador",
        "Cavalgada",
        "Barras Fixas",
        "Banco para Abdominais",
        "Rotação Vertical",
        "Volante de Rotação"
    ];

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagem do treino */}
            <img 
                src="https://img.freepik.com/fotos-gratis/mulher-bonita-fazendo-flexoes_23-2148343662.jpg?t=st=1741118614~exp=1741122214~hmac=3ca0e7b31b06156c670127c606b0a8b72467cc83009b5ffa39c5a0be18ddc5bb&w=1380" 
                alt="Treinamento ao Ar Livre"
                className="w-full h-48 object-cover"
            />

            {/* Barra de título */}
            <div className="bg-green-500 text-white text-center font-bold py-2 text-lg">
                CONDICIONAMENTO FÍSICO
            </div>

            {/* Informações principais */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⏳</span>
                        <span className="text-gray-700 font-semibold">Duração</span>
                        <span className="text-gray-600">30 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⚡</span>
                        <span className="text-gray-700 font-semibold">Intensidade</span>
                        <span className="text-gray-600">Moderada</span>
                    </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-700 text-sm mb-4">
                    Exercícios de cardio, força e mobilidade, para um condicionamento físico equilibrado.
                </p>

                {/* Lista de exercícios */}
                <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <h3 className="text-md font-semibold text-gray-800">Exercícios do Treino</h3>
                    <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
                        {exercicios.map((exercicio, index) => (
                            <li key={index}>{exercicio}</li>
                        ))}
                    </ul>
                </div>

                {/* Botão de ação corrigido */}
                <button
                    className="w-full text-green-600 font-semibold text-sm py-2 mt-4 hover:underline"
                    onClick={() => navigate("/listacategorias/ListaPesoNormal")}
                >
                    Saiba Mais
                </button>
            </div>
        </div>
    );
}
