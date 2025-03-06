import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../../exercicio/cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";
import { buscar } from "../../../services/Service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function ListaSobrepeso() { // Alterado de ListaPesoNormal para ListaSobrepeso
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const imagens = [
        { src: "/img/surf.png" },
        { src: "/img/Simulador de Remo.png" },
        { src: "/img/Simulador de Cavalgada.png" },
        { src: "/img/Simulador de Caminhada.png" },
        { src: "/img/Rotação Vertical.png" },
        { src: "/img/Leg Press.png" },
        { src: "/img/esqui.png" },
        { src: "/img/alongador.png" }
    ];

    async function buscarExercicio() {
        try {
            await buscar('/exercicios?categoria=emagrecimento', setExercicios, { // Alterado para 'emagrecimento' ao invés de 'condicionamento'
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
                        Emagrecimento Leve {/* Alterado de "Condicionamento Físico" para "Emagrecimento Leve" */}
                    </h1>
                    <p className="text-white text-lg mt-4 max-w-3xl">
                        Treino focado na perda de peso gradual e sustentável, combinando exercícios aeróbicos e de resistência para promover saúde e bem-estar. {/* Texto atualizado para refletir o emagrecimento */}
                    </p>
                </div>
            </div>

            {/* Informações sobre o treino */}
            <div className="flex">
                <div className="bg-[#CEF9A9] w-full p-10">
                    {/* Seção Esquerda */}
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl font-bold text-gray-900">🕑 Duração:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">30 a 45 minutos</p> {/* Alterado de "40 a 55 minutos" para "30 a 45 minutos" */}
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-900">⚡ Intensidade:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">Moderada</p> {/* Alterado de "Alta" para "Moderada" */}
                    </div>
                    <p>Descansos alternados de 5 a 8 minutos.</p> {/* Alterado de "5 a 10 minutos" para "5 a 8 minutos" */}
                    <p>Realize o aquecimento adequadamente para evitar lesões.</p> {/* Texto atualizado para enfatizar a prevenção de lesões */}
                </div> 
                {/* Seção Direita */}
                <div className="bg-[#A0E080] w-full p-10">
                    <h2 className="text-3xl font-bold text-gray-900">📌 Benefícios do Treino</h2>
                    <p>Promove a perda de peso saudável com atividades aeróbicas, fortalecendo o corpo e melhorando o condicionamento físico. 🌱🏃‍♂️. {/* Texto alterado para focar no emagrecimento saudável */}
                    </p>
                </div>
            </div>

            {/* Carrossel */}
            <div className="max-w-screen-2xl mx-auto mt-6 p-12">                     
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20} // Espaçamento entre os slides
                        slidesPerView={3} // Exibe 3 slides por vez
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
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

            

            {/* Lista de Exercícios */}
            <div className="flex justify-center w-full bg-[#CEF9A9] py-8 min-h-screen">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Exercícios do Treino
                    </h2>
                    <div className="w-full flex justify-center my-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {exercicios.length > 0 ? (
                                exercicios.map((exercicio) => (
                                    <CardExercicio key={exercicio.id} exercicio={exercicio} />
                                ))
                            ) : (
                                <p className="text-center text-gray-700">Carregando exercícios...</p>
                            )}
                        </div>
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

                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">
                    ✅ CONCLUIR TREINO ✅
                </button>
            </div>
        </>
    );
}

export default ListaSobrepeso; // Alterado o nome do componente para ListaSobrepeso
