import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function Alongamento() {
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
                    src="https://img.freepik.com/fotos-gratis/uma-mulher-saudavel-esta-fazendo-exercicios-ao-ar-livre_344912-1989.jpg?t=st=1741210520~exp=1741214120~hmac=6f43812d2939615aa386e2260fa7e021815f3db92d932ded062ebdcf264e402b&w=1380"
                    alt="Mulher fazendo alongamento ao ar livre"
                    className="absolute w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl font-extrabold">
                        Alongamento
                    </h1>
                    <p className="text-white text-lg mt-4 max-w-3xl">
                        Sessão essencial para melhorar a flexibilidade, evitar lesões e alongar os músculos, promovendo bem-estar e alívio do estresse.
                    </p>
                </div>
            </div>

            {/* Informações sobre o treino */}
            <div className="flex">
                <div className="w-full p-10 bg-[#F9D9A9]"> {/* Mesma cor do aquecimento */}
                    {/* Seção Esquerda */}
                    <div className="flex items-center gap-2 p-2">
                        <h2 className="text-3xl font-bold text-gray-900">🕑 Duração: 10 a 20 minutos</h2>
                    </div>

                    <div className="flex items-center gap-2 mt-4 md:mt-0 p-2">
                        <h2 className="text-3xl font-bold text-gray-900">⚡ Intensidade: Baixa</h2>
                    </div>
                    <br></br>
                    <p>Melhora a elasticidade muscular e reduz tensões pré-treino.</p>
                    <p>Mantenha uma respiração controlada para potencializar o relaxamento.</p>
                </div>
                {/* Seção Direita */}
                <div className="bg-[#E0B878] w-full p-16 "> {/* Mesma cor do aquecimento */}
                    <h2 className="text-3xl font-bold text-gray-900 p-2">📌 Benefícios do alongamento</h2>
                    <br></br>
                    <p>Aumenta a flexibilidade | Melhora a circulação | Reduz o estresse muscular</p>
                </div>
            </div>

            {/* Passo a Passo do Alongamento */}
            <div className="flex justify-center w-full py-8 min-h-screen">
                <div className="container flex flex-col">
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Passo a passo para um alongamento completo 
                    </h2>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto text-gray-800 text-lg">
                        <ul className="list-decimal list-inside space-y-4">
                            <li><strong>Aquecimento Leve:</strong> Antes de alongar, faça uma caminhada leve ou um pequeno aquecimento de 2 minutos.</li>
                            <li><strong>Pernas e Panturrilhas:</strong> Mantenha os pés afastados, incline o corpo à frente e tente tocar os pés. Segure por 20 segundos.</li>
                            <li><strong>Ombros e Pescoço:</strong> Gire os ombros para trás e para frente. Depois, incline a cabeça para os lados, mantendo 15 segundos em cada lado.</li>
                            <li><strong>Alongamento de Braços:</strong> Estique um braço sobre o peito e puxe suavemente com a outra mão. Troque de lado após 15 segundos.</li>
                            <li><strong>Rotação de Tronco:</strong> De pé, gire o tronco de um lado para o outro lentamente, mantendo os pés fixos no chão.</li>
                            <li><strong>Quadríceps:</strong> Em pé, segure o tornozelo e traga o calcanhar em direção ao glúteo, alongando a coxa. Troque de perna após 20 segundos.</li>
                            <li><strong>Respiração final:</strong> Inspire profundamente e solte o ar lentamente. Faça 3 respirações profundas para finalizar o alongamento.</li>
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

export default Alongamento;
