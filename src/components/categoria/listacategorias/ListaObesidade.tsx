import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../../exercicio/cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";
import { buscar } from "../../../services/Service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function ListaObesidade() {
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const imagens = [ 
        { src: "/img/caminhada.jpg" },
        { src: "/img/remada.jpg" },
        { src: "/img/legpress.jpg" },
        { src: "/img/multi.jpg" },
        { src: "/img/rotacao.jpg" },
        { src: "/img/cavalgada.jpg" }
    ];

    async function buscarExercicio() {
        try {
            await buscar('/exercicios?categoria=obesidade', setExercicios, { 
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
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarExercicio();
    }, []);

    return (
        <>
            {/* Banner da página */}
            <div className="bg-gray-100 min-h-screen">
                <img
                    src="/images/exercicio_topo.png"
                    alt="Imagem de treino"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl font-extrabold">
                        Treino para Obesidade
                    </h1>
                    <p className="text-white text-lg mt-4 max-w-3xl">
                        Exercícios planejados para perda de peso segura e eficaz, priorizando baixa intensidade e adaptação progressiva.
                    </p>
                </div>
            </div>

            {/* Informações sobre o treino */}
            <div className="flex">
                <div className="w-full p-10 bg-[#CEF9A9]">
                    {/* Seção Esquerda */}
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl font-bold text-gray-900 p-2">🕑 Duração:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">20 a 40 minutos</p> 
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-900 p-2">⚡ Intensidade:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">Baixa a Moderada</p> 
                    </div>
                    <p>Descansos de 10 a 15 minutos entre as séries.</p>
                    <p>Exercícios de baixo impacto para reduzir sobrecarga nas articulações.</p>
                </div>
                {/* Seção Direita */}
                <div className="bg-[#A0E080] w-full p-10">
                    <h2 className="text-3xl font-bold text-gray-900 p-2">📌 Benefícios do Treino</h2>
                    <p>Ajuda na mobilidade, queima de calorias e melhora da resistência física sem sobrecarregar o corpo. 🌱🏃‍♂️</p>
                </div>
            </div>

            <div className="bg-gray-100 text-center">
                <h2 className="text-2xl font-bold pt-5 text-gray-900">Veja alguns exercícios na praça para você incluir no seu treino</h2>
            {/* Carrossel */}
            <div className="max-w-screen-2xl mx-auto mt-6 p-12">                     
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="rounded-lg shadow-lg"
                >
                    {imagens.map((imagem, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center relative w-full">
                            <img 
                                src={imagem.src} 
                                className="w-auto h-[45vh] object-cover rounded-lg"
                            />
                        </SwiperSlide>                       
                    ))}
                </Swiper>
            </div>
        </div>

            {/* Lista de Exercícios */}
            <div className="flex justify-center w-full bg-[#CEF9A9] py-8 min-h-screen">
                <div >
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Exercícios do Treino
                    </h2>
                    <div className="w-full flex justify-center my-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {exercicios.length > 0 ? (
                                exercicios.map((exercicio) => (
                                    <CardExercicio key={exercicio.id} exercicio={exercicio} onDelete={function (): void {
                                        throw new Error("Function not implemented.");
                                    } } />
                                ))
                            ) : (
                                <p className="text-center text-gray-700">Carregando exercícios...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex justify-center bg-[#CEF9A9] gap-4 py-6">
                <button 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
                    onClick={() => navigate('/categorias')}
                >
                    🔙 Voltar para Categorias
                </button>

                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">
                    ✅ CONCLUIR TREINO ✅
                </button>
            </div>
        </>
    );
}

export default ListaObesidade;