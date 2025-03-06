import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

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
                    src="https://img.freepik.com/fotos-gratis/homem-correndo-em-um-beco-no-parque_23-2148297573.jpg?t=st=1741210817~exp=1741214417~hmac=5a00c7d2c3d50d139d9b474fe4cdbf2a9c4e2e8ebb8cd296b852e680fac6ad14&w=1380"
                    alt="Homem correndo no parque"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl font-extrabold">
                        Aquecimento & Preparo Físico
                    </h1>
                    <p className="text-white text-lg mt-4 max-w-3xl">
                        Sessão essencial para ativar a circulação, preparar os músculos e evitar lesões, garantindo um desempenho seguro e eficiente nos treinos.
                    </p>
                </div>
            </div>

            {/* Informações sobre o treino */}
            <div className="flex">
                <div className="bg-[#F9D9A9] w-full p-10">
                {/* Seção Esquerda */}
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl font-bold text-gray-900 p-2">🕑 Duração:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">10 a 20 minutos</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-900">⚡ Intensidade:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">Moderada</p>
                    </div>
                    <p >Realize cada movimento de forma controlada e progressiva para ativar os músculos corretamente.</p>
                    <p>O aquecimento é essencial para melhorar a mobilidade e evitar lesões durante o treino.</p>
                </div>
                {/* Seção Direita */}
                <div className="bg-[#E0B878] w-full p-10">
                    <h2 className="text-3xl font-bold text-gray-900 p-2">📌 Benefícios do Aquecimento</h2>
                    <p className="text-center p-2">Ativa a circulação sanguínea, melhora a elasticidade muscular, reduz riscos de lesões e prepara o corpo para atividades mais intensas. 🔥💪</p>
                </div>
            </div>

            {/* Passo a Passo do Aquecimento */}
            <div className="flex justify-center w-full bg-white py-8 min-h-screen">
                <div className="container flex flex-col">
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Passo a Passo para um Aquecimento Eficiente
                    </h2>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto text-gray-800 text-lg">
                        <ul className="list-decimal list-inside space-y-4">
                            <li><strong>Movimentação Articular:</strong> Gire os tornozelos, joelhos, quadris, ombros e punhos por 10 a 15 segundos em cada articulação.</li>
                            <li><strong>Caminhada Leve ou Corrida Estacionária:</strong> Faça 2 a 3 minutos de caminhada rápida ou corrida estacionária para ativar o sistema cardiovascular.</li>
                            <li><strong>Elevação de Joelhos:</strong> Suba os joelhos até a altura da cintura em um ritmo moderado por 30 segundos.</li>
                            <li><strong>Polichinelos:</strong> Execute 20 a 30 repetições para ativar todo o corpo.</li>
                            <li><strong>Rotação de Tronco:</strong> Gire o tronco lentamente de um lado para o outro para soltar a coluna e os músculos abdominais.</li>
                            <li><strong>Flexões de Braço Modificadas:</strong> Faça 5 a 10 flexões de braço em um ritmo leve para aquecer os membros superiores.</li>
                            <li><strong>Alongamento Dinâmico:</strong> Faça movimentos suaves de alongamento para pernas, braços e costas.</li>
                            <li><strong>Respiração Controlada:</strong> Inspire profundamente pelo nariz e expire pela boca para oxigenar os músculos antes do treino.</li>
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
                    🔙 Voltar para Categorias
                </button>

                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                    ✅ CONCLUIR AQUECIMENTO ✅
                </button>
            </div>
        </>
    );
}

export default Aquecimento;
