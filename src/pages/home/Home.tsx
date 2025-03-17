import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y  } from "swiper/modules";
import fotosobre from "../../../public/images/fotosobre.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MapaParques from "../../services/MapaParques";

const images: string[] = [
    "/img/foto1.png",
    "/img/foto2.png",
    "/img/foto3.png",
    "/img/foto4.png",
    "/img/foto5.png",
    "/img/foto6.png",
    "/img/foto7.png",
    "/img/foto8.png",
    "/img/foto9.png",
    "/img/foto10.png",
];

function Home() {
    const { usuario } = useContext(AuthContext);
    const [cliente, setCliente] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        imc: 0,
        peso: 0,
        altura: 0,
        idade: 0,
    });

    async function buscaDados() {
        try {
            await buscar(`usuarios/${usuario.id}`, setCliente, { headers: { Authorization: usuario.token } });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscaDados()
    }, [usuario.id])

    




    return (
        <>
            <div className="">
                <section
                    style={{ backgroundImage: `url('images/fundo.png')` }}
                    className="text-white bg-fixed bg-cover bg-center"
                >
                    <div className="flex flex-col justify-start p-20 items-center text-center sm:text-left sm:items-start">
                        <h2 className="text-5xl font-bold my-20">
                            PRAÇAFit
                            <br /> Seu treino livre
                        </h2>
                        <p className="text-xl sm:text-xl">
                            Liberte sua energia, abrace a natureza e transforme
                            <br /> seu corpo ao ar livre.
                        </p>
                        {usuario.token !== "" && (
                            <div>
                                <Link
                                    to={`/exercicios`}
                                    className="text-slate-100 bg-[#75BA23] hover:bg-[#61A514] flex justify-center w-32 my-10 p-1"
                                >
                                    <button>Veja os treinos</button>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
                <section className="flex flex-col sm:flex-row">
                    {/* Treinos personalizados */}
                    <div className="bg-[#CEF9A9] w-full p-5 px-10 text-center sm:text-left">
                        <p className="text-3xl font-bold py-5">
                            Veja o treino para<br /> seu IMC
                        </p>
                        <p className="w-full max-w-md mx-auto text-base sm:text-lg md:text-xl text-center sm:text-justify leading-relaxed px-6">
                        Te entregamos um treino personalizado de acordo com o seu IMC.
                        </p>

                        {cliente.imc < 18.5 && (
                            <Link to={`/listacategorias/ListaAbaixoDoPeso`}>
                                <button className="text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]">
                                    Ver Treino
                                </button>
                            </Link>
                        )}
                        {cliente.imc >= 18.5 && cliente.imc <= 24.99 && (
                            <Link to={`/listacategorias/ListaPesoNormal`}>
                                <button className="text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]">
                                    Ver Treino
                                </button>
                            </Link>
                        )}
                        {cliente.imc >= 25 && cliente.imc <= 29.99 && (
                            <Link to={`/listacategorias/ListaAtencaoSaude`}>
                                <button className="text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]">
                                    Ver Treino
                                </button>
                            </Link>
                        )}
                        {cliente.imc > 29.99 && (
                            <Link to={`/listacategorias/ListaSaudeEmFoco`}>
                                <button className="text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]">
                                    Ver Treino
                                </button>
                            </Link>
                        )}
                    </div>
                    {/* Categorias */}
                    <div className="bg-[#B6EE8D] w-full p-5 px-10 text-center sm:text-right hidden lg:block">
                        <p className="text-3xl font-bold py-5">
                            Escolha uma
                            <br /> Categoria de treino
                        </p>
                        <p className="text-justify ">
                        Aqui você encontra categorias de treinos que <br /> se adequam a sua necessidade.
                        </p>
                        <Link to={`/categorias`}>
                            <button className="text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]">
                                Categorias
                            </button>
                        </Link>
                    </div>
                </section>
                <section className="bg-[#E5E5E5]">
                    <div className="flex flex-col p-10">
                        <p className="text-xl">
                            Veja alguns exercícios na praça para você incluir no seu treino:
                        </p>
                        <div className="flex p-10 relative rounded-lg shadow-lg justify-center">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay, A11y]}
                                slidesPerView={4}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                pagination={{ clickable: true, el: '.swiper-pagination' }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                autoplay={{ delay: 1000 }}
                                loop={true}
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index} className="flex items-center justify-center">
                                        <img
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            className="rounded-none mx-auto object-contain"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                {/* Adicione o componente do mapa aqui */}
                <section className=" py-4 px-8">
                    <p className="text-3xl text-center font-bold py-10 ">
                        Parques em São Paulo para o seu treino
                    </p>
                    <div className="flex flex-col md:flex-row-reverse items-start">
                        <div className="grid justify-items-center m-20">
                            <p className="text-xl">
                                Quer manter a rotina de treinos ao ar livre? Além de praças,<br />
                                São Paulo oferece diversas opções de parques para correr, caminhar e
                                se exercitar em meio à natureza.<br /> Com espaços amplos, áreas verdes
                                e infraestrutura adequada, a cidade conta com várias alternativas
                                para quem busca esse tipo de atividade. <br />Escolha o seu favorito e aproveite!
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <MapaParques />
                        </div>
                    </div>
                </section>
                <section className="py-10 px-4">
                    <p className="text-3xl text-center font-bold py-10 ">
                        SOBRE PRAÇAFit
                    </p>
                    <div className="flex flex-col lg:flex-row justify-around items-center mt-8">
                        {/* Texto */}
                        <div className="grid justify-items-center text-center lg:text-left max-w-lg">
                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed px-6">
                                Quer mais praticidade e eficiência na sua jornada fitness?
                                <br />
                                Com o <strong>PraçaFit</strong>, você tem uma plataforma exclusiva para monitorar seu peso e IMC, ajudando você a acompanhar sua evolução de forma simples e intuitiva. 📊💪
                            </p>

                            {/* Botão */}
                            <Link to={`/sobre`} className="mt-6">
                                <button className="text-white p-3 bg-[#14B467] hover:bg-[#129858] rounded-md font-semibold shadow-md">
                                    Veja Sobre...
                                </button>
                            </Link>
                        </div>
                        <img src={fotosobre} alt="sobre" className="m-10" />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;