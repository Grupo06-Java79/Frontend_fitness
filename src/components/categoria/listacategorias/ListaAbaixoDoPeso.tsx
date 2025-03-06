import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../../exercicio/cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function ListaExercicios() {
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const imagens = [
        { src: "/img/surf.png"},
        { src: "/img/Simulador de Remo.png"},
        { src: "/img/Simulador de Cavalgada.png"},
        { src: "/img/Simulador de Caminhada.png"},
        { src: "/img/Rotação Vertical.png"},
        { src: "/img/Leg Press.png"},
        { src: "/img/esqui.png"},
        { src: "/img/alongador.png"}
    ];

    async function buscarExercicio() {
        try {
            await buscar('/exercicios', setExercicios, {
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
            {/* Imagem com Texto Sobreposto */}
            <div className="bg-gray-100 min-h-screen">
                <img
                    src="/images/exercicio_topo.png"
                    alt="Imagem mulheres praticando exercício"
                    className="absolute w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/1200x600";
                    }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-6xl md:text-5xl sm:text-4xl font-extrabold">
                        GANHO DE MASSA
                    </h1>
                    <p className="text-white text-xl md:text-lg font-medium mt-20 max-w-3xl text-justify">
                        Este treino foi cuidadosamente desenvolvido para pessoas abaixo do peso que desejam ganhar massa muscular de maneira saudável e eficiente. 
                        Combinando exercícios compostos e progressão de carga, você fortalecerá seu corpo enquanto se conecta com a natureza, 
                        unindo movimento e bem-estar em cada treino. 💪
                    </p>
                </div>
            </div>

            {/* Seção introdutória com fundo verde claro */}
            <div className="flex">
                <div className="w-full p-10 bg-[#CEF9A9]">
                {/* Seção Esquerda */}
                    <div className="flex items-center gap-2 p-2">
                        <h2 className="text-3xl font-bold text-gray-900">🕑 Duração:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">40 a 55 minutos</p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 md:mt-0 p-2">
                        <h2 className="text-3xl font-bold text-gray-900">⚡ Intensidade:</h2>
                        <p className="text-black text-lg md:text-xl font-bold">Alta</p>
                    </div>
                    <p>Descansos alternados de 5 a 10 minutos.</p>
                    <p>Realize o aquecimento adequadamente.</p>
                </div>
                {/* Seção Direita */}
                <div className="w-full p-16 bg-[#A0E080] ">
                    <h2 className="text-3xl font-bold text-gray-900 p-2">📌 Benefícios do Treino</h2>
                    <p className="p-2">Ganhe força e massa muscular de forma saudável com um treino dinâmico, desafiador e conectado à natureza. 💪🌿.</p>
                </div>
            </div>

            {/* Separação visual com Carrossel */}
            <div className="bg-gray-100 text-center">
                <h2 className="text-2xl font-bold pt-5 text-gray-900">Veja alguns exercícios na praça para você incluir no seu treino</h2>

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
                           {/* Imagem */}
                           <img 
                               src={imagem.src} 
                               className="w-auto h-[45vh] object-cover rounded-lg"  // Ajustando a largura automática e mantendo a altura
                           />
                       </SwiperSlide>                       
                        
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Lista de Exercícios */}
            <div className="flex justify-center bg-[#CEF9A9] pt-16">
                <div >
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Lista de exercícios
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

export default ListaExercicios;
