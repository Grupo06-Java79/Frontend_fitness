import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardExercicio from "../../exercicio/cardexercicio/CardExercicio";
import Exercicio from "../../../models/Exercicio";
import { buscar } from "../../../services/Service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import foto from "../../../../public/images/categoriasfotos/fundopesoideal.png";
import { Oval } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaPesoNormal() {
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const imagens = [
        { src: "/img/abdominal.jpg" },
        { src: "/img/esqui.jpg" },
        { src: "/img/caminhada.jpg" },
        { src: "/img/cavalgada.jpg" },
        { src: "/img/rotacao.jpg" },
        { src: "/img/barras.jpg" }
    ];

    async function buscarExercicio() {
        try {
            await buscar('/exercicios?categoria=condicionamento', setExercicios, {
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
    const exerciciosPesoNormal = exercicios.filter(exercicio => exercicio.categoria.id === 3);


    return (
        <>
            <div className="bg-gray-100 min-h-screen relative overflow-hidden">
                <img
                    src={foto}
                    alt="Imagem de treino"
                    className="absolute top-0 left-0 w-full h-full object-cover sm:h-auto sm:max-h-screen"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        CONDICIONAMENTO FÍSICO
                    </h1>
                    <p className="text-white text-lg mt-4 max-w-3xl text-justify">
                    O treino ao ar livre para manter o condicionamento físico é uma
                    ótima opção para quem busca equilíbrio entre saúde e bem-estar.
                    Com a combinação de movimentos dinâmicos, que trabalham força, 
                    resistência e mobilidade, é possível aproveitar o espaço aberto 
                    e os equipamentos disponíveis para uma prática variada e estimulante.
                    </p>
                </div>
            </div>


            {/* Informações sobre o treino */}
            <div className="flex flex-col md:flex-row">
                {/* Seção Esquerda (Visível sempre) */}
                <div className="w-full p-6 sm:p-8 md:p-10 bg-white md:bg-[#CEF9A9] flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                            🕑 Duração: 40 a 55 minutos
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                            ⚡ Intensidade: Alta
                        </h2>
                    </div>
                    <br />
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto md:mx-0">
                        Descansos de 1 a 3 minutos entre as séries.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto md:mx-0 mt-2">
                        Realize o aquecimento adequadamente.
                    </p>
                </div>

                {/* Seção Direita (Aparece apenas em telas grandes) */}
                <div className="bg-[#A0E080] w-full p-6 sm:p-8 md:p-10 hidden lg:block">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 p-2">
                        📌 Benefícios do treino
                    </h2>
                    <br />
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                        Manter a boa forma | Manter a força | Bom condicionamento
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
            <div className="flex justify-center bg-[#CEF9A9] py-8 min-h-screen">
                <div className="">
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
                        Exercícios do treino
                    </h2>
                    <div className="w-full flex justify-center my-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {exerciciosPesoNormal.length > 0 ? (
                                exerciciosPesoNormal.map((exercicio) => (
                                    <CardExercicio key={exercicio.id} exercicio={exercicio} onDelete={function (): void {
                                        throw new Error("Function not implemented.");
                                    }} />
                                ))
                            ) : (
                                <Oval
                                    visible={false}
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
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

export default ListaPesoNormal;
