import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../../exercicio/cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";
import { Swiper, SwiperSlide } from "swiper/react";
import foto from "../../../../public/images/categoriasfotos/fundoganhomassa.png";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { b } from "framer-motion/client";
import { Oval } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaExercicios() {
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const imagens = [
        { src: "/img/abdominal.jpg" },
        { src: "/img/remada.jpg" },
        { src: "/img/barras.jpg" },
        { src: "/img/extensordepernas.jpg" },
        { src: "/img/legpress.jpg" },
        { src: "/img/puxadorcostas.jpg" }
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
            ToastAlerta("Você precisa estar logado","alerta");
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarExercicio();
    }, []);

    // Filtrar exercícios para abaixo do peso
    const exerciciosAbaixoDoPeso = exercicios.filter(exercicio => exercicio.categoria.id === 2);

    return (
        <>
            {/* Imagem com Texto Sobreposto */}
            <div className="bg-gray-100 min-h-screen">
                <img
                    src={foto}
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
                    <p className="text-white text-lg mt-4 max-w-3xl text-justify">
                    O treino ao ar livre para ganho de massa pode incluir exercícios de força
                    para membros superiores, inferiores e core, utilizando o peso do corpo ou 
                    equipamentos disponíveis nos parques. São movimentos que ajudam no fortalecimento muscular,
                    promovendo resistência e hipertrofia de forma dinâmica e natural.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-0">
                {/* Seção Esquerda (Sempre visível) */}
                <div className="w-full p-10 sm:p-16 bg-white lg:bg-[#CEF9A9] flex flex-col items-center text-center lg:items-start lg:text-left lg:mt-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                        🕑 Duração: 40 a 55 minutos
                    </h2>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                        ⚡ Intensidade: Alta
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                        Descansos de 1 a 3 minutos entre as séries.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md mt-2">
                        Realize o aquecimento adequadamente.
                    </p>
                </div>

                {/* Seção Direita (Oculta em telas pequenas, aparece em grandes) */}
                <div className="w-full p-10 bg-[#A0E080] hidden lg:block">
                    <h2 className="text-3xl font-bold text-gray-900 p-2">📌 Benefícios do treino</h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        Ganho de força | Ganho de massa muscular | Ganho de resistência
                    </p>
                </div>
            </div>
            



            {/* Separação visual com Carrossel */}
            <div className="bg-gray-100 text-center hidden lg:block">
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
                            el: '.swiper-pagination',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        autoplay={{ delay: 2500 }}
                        loop={true}
                        className="rounded-lg shadow-lg align-middle"
                    >
                        {imagens.map((imagem, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                {/* Imagem */}
                                <img
                                    src={imagem.src}
                                    className="w-auto h-72 mx-auto object-cover rounded-lg"  // Ajustando a largura automática e mantendo a altura
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
                        Exercícios do treino
                    </h2>
                    <div className="w-full flex justify-center my-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {exerciciosAbaixoDoPeso.length > 0 ? (
                                exerciciosAbaixoDoPeso.map((exercicio) => (
                                    <CardExercicio key={exercicio.id} exercicio={exercicio} onDelete={function (): void {
                                        throw new Error("Function not implemented.");
                                    }} />
                                   
                                ))
                            ) : (
                                <p></p>
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
                    Voltar para categorias
                </button>
            </div>
        </>
    );
}

export default ListaExercicios;
