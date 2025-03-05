import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import fotosobre from "../../../public/fotosobre.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useContext, useEffect, useState } from "react";
import { buscar, cadastrar } from "../../services/Service";
import Usuario from "../../models/Usuario";
import { AuthContext } from "../../contexts/AuthContext";

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

    const [mensagem, setMensagem] = useState<string>("");

    const [cliente, setCliente] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        peso: 0,
        altura: 0,
        idade: 0,
    });

    const { usuario } = useContext(AuthContext)

    async function buscaDados() {
        try {
            await buscar(`usuarios/${usuario.id}`, setCliente, { headers: { Authorization: usuario.token } })
        } catch (error) {
            console.log(error)
        }
    }

    async function calcularIMC(){
        try {
            await cadastrar(`/usuarios/calcular-imc`, clienteSemExercicio, setCliente, { headers: { Authorization: usuario.token } })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscaDados(),
        calcularIMC()
    }, [usuario.id])

    console.log("cliente");
    const { exercicio, 
        ...clienteSemExercicio 
    } = cliente;

    console.log(clienteSemExercicio);

    return (
        <>
            <div className="">
                <section className="text-white bg-[url('../../../public/fundo.png')] bg-fixed bg-cover bg-center" >
                    <div className="flex flex-col justify-start p-20">
                        <p className="pt-20">Treino na Praça</p>
                        <h2 className='text-5xl font-bold my-20'>
                            Seja Bem Vindo!<br/> Alguma coisa
                        </h2>
                        <p className='text-xl'>
                            Liberte sua energia, abrace a natureza e transforme <br/> seu corpo  ao ar livre. 
                        </p>
                        <div>
                            <Link to={`/login`} 
                                className='text-slate-100 bg-[#75BA23] hover:bg-[#61A514] 
                                    flex justify-center w-32 my-10 p-1'>
                                <button>Monte agora...</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="flex">
                    <div className="bg-[#CEF9A9] w-full p-10">
                        <p className="text-3xl font-bold py-10">
                            Alguma<br/> Coisa
                        </p>
                        <p className="w-3/5">
                            Algum textinho rápido que resume um pouco sobre o objetivo do site
                        </p>
                    </div>
                    <div className="bg-[#B6EE8D] w-full p-10 text-end ">
                        <p className="text-3xl font-bold py-10 ">
                            Alguma<br/> Coisa
                        </p>
                        <p className="">
                            Algum textinho rápido que resume um pouco <br/>sobre o objetivo do site
                        </p>
                    </div>
                </section>
                <section className="bg-[#E5E5E5]">
                    <div className="flex flex-col p-10">
                        <p className="text-xl">
                            Veja alguns exercícios na praça para você incluir no seu treino
                        </p>
                        <div className="flex p-10 relative">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay , A11y]}
                                slidesPerView={4}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                autoplay={{ delay: 1000, disableOnInteraction: false }}
                            >
                                {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="rounded-none" 
                                    />
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section >
                    <p className="text-3xl text-center font-bold py-10 ">
                        SOBRE PRAÇA FIT
                    </p>
                    <div className="flex justify-around">
                        <div className="grid justify-items-center m-20">
                            <p className="text-xl text-center ">
                                algum textinho rápido que resume um pouco sobre o objetivo do site <br/> E algo pra enviar o usuário pra pagina sobre
                            </p>
                            <Link to={`/sobre`} className="flex justify-center m-10">
                                <button className='text-slate-100 p-2 bg-[#14B467] hover:bg-[#129858]'>
                                    Veja Sobre...
                                </button>
                            </Link>
                        </div>
                        <img src={fotosobre} alt="Logotipo" className="m-10" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;