import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import foto from "../../../../public/images/categoriasfotos/fundoaquecimento.png";

function Aquecimento() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado");
            navigate("/");
        }
    }, [token]);

    return (
        <>
            {/* Banner da página */}
            <div className="bg-gray-100 min-h-screen">
                <img
                    src={foto}
                    alt="Homem correndo no parque"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl font-extrabold">
                        Aquecimento
                    </h1>
                    <p className="text-white text-lg mt-4 max-w-3xl">
                        Sessão essencial para ativar a circulação, preparar os músculos e evitar lesões, garantindo um desempenho seguro e eficiente nos treinos.
                    </p>
                </div>
            </div>

            {/* Informações sobre o treino */}
            <div className="flex flex-col lg:flex-row">
                {/* Seção Esquerda (Visível sempre, centralizada apenas em telas pequenas) */}
                <div className="w-full p-10 bg-[#F9D9A9] flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                        🕑 Duração: 10 a 20 minutos
                    </h2>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                        ⚡ Intensidade: Média
                    </h2>
                    <br />
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                        Realize cada movimento de forma controlada e progressiva para ativar os músculos corretamente.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md mt-2">
                        O aquecimento é essencial para melhorar a mobilidade e evitar lesões durante o treino.
                    </p>
                </div>

                {/* Seção Direita (Oculta em telas pequenas, visível apenas em telas grandes) */}
                <div className="w-full p-10 bg-[#E0B878] hidden lg:block">
                    <h2 className="text-3xl font-bold text-gray-900 p-2">📌 Benefícios do aquecimento</h2>
                    <br />
                    <p className="text-sm sm:text-base md:text-lg text-center p-2">
                        Aumenta a flexibilidade | Melhora a circulação | Reduz o estresse muscular
                    </p>
                </div>
            </div>


            {/* Passo a Passo do Aquecimento */}
            <div className="flex justify-center w-full bg-white py-8 min-h-screen">
                <div className="container flex flex-col">
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Passo a passo para um aquecimento eficiente
                    </h2>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto text-gray-800 text-lg">
                        <ul className="list-decimal list-inside space-y-4">
                            <li><strong>Movimentação articular:</strong> Gire os tornozelos, joelhos, quadris, ombros e punhos por 10 a 15 segundos em cada articulação.</li>
                            <li><strong>Caminhada leve ou corrida estacionária:</strong> Faça 2 a 3 minutos de caminhada rápida ou corrida estacionária para ativar o sistema cardiovascular.</li>
                            <li><strong>Elevação de joelhos:</strong> Suba os joelhos até a altura da cintura em um ritmo moderado por 30 segundos.</li>
                            <li><strong>Polichinelos:</strong> Execute 20 a 30 repetições para ativar todo o corpo.</li>
                            <li><strong>Rotação de tronco:</strong> Gire o tronco lentamente de um lado para o outro para soltar a coluna e os músculos abdominais.</li>
                            <li><strong>Flexões de braço:</strong> Faça 5 a 10 flexões de braço em um ritmo leve para aquecer os membros superiores.</li>
                            <li><strong>Respiração final:</strong> Inspire profundamente e solte o ar lentamente. Faça 3 respirações profundas para finalizar o aquecimento.</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex justify-center gap-4 py-6">
                <button
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
                    onClick={() => navigate('/categorias')}
                >
                    Voltar para categorias
                </button>
            </div>
        </>
    );
}

export default Aquecimento;
