import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y  } from "swiper/modules";
import fotosobre from "../../../public/fotosobre.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

    

    //pegamos os dados do usuario logado
    const { usuario } = useContext(AuthContext);
    // Criamos um objeto do tipo Usuario que usamos para acessar dados não disponiveis no authcontext
    const [cliente, setCliente] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        imc:0,
        peso: 0,
        altura: 0,
        idade: 0,
    });

    // Pegamos os dados do usuario logado
    async function buscaDados() {
        try {
            await buscar(`usuarios/${usuario.id}`, setCliente, { headers: { Authorization: usuario.token } })
        } catch (error) {
            console.log(error)
        }
    }

    // Pegamos os dados do usuario logado
    useEffect(() => {
        buscaDados()
    }, [usuario.id])

    
    return (
        <>
            <div className="">
                <section className="text-white bg-[url('../../../public/fundo.png')] bg-fixed bg-cover bg-center" >
                    <div className="flex flex-col justify-start p-20">
                        
                        <h2 className='text-5xl font-bold my-20'>
                            PRAÇAFit<br/> Seu treino livre
                        </h2>
                        <p className='text-xl'>
                            Liberte sua energia, abrace a natureza e transforme <br/> seu corpo ao ar livre. 
                        </p>
                        <div>
                            <Link to={`/login`} 
                                className='text-slate-100 bg-[#75BA23] hover:bg-[#61A514] 
                                    flex justify-center w-32 my-10 p-1'>
                                <button>Veja o treino</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="flex">
                    <div className="bg-[#CEF9A9] w-full p-5 px-10">
                        <p className="text-3xl font-bold py-5">
                            Veja o trieno para<br/> seu IMC
                        </p>
                        <p className="w-3/5">
                            Aqui você consegue montar seu treino de acordo com o seu objetivo. <br/>
                            Te ajudamos a aprender usar cada aparelho na nossa lista de exercícios.
                        </p>
                        <Link to={`/exercicios`}>
                            <button className='text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]'>
                                Ver Treino
                            </button>
                        </Link>
                    </div>
                    <div className="bg-[#B6EE8D] w-full p-5 px-10 text-end ">
                        <p className="text-3xl font-bold py-5 ">
                            Escolha uma<br/> Categoria de treino
                        </p>
                        <p className="">
                            Aqui você encontra categorias de treinos que <br/> se adequam a sua necessidade.<br/>
                            Monte seu IMC e veja o melhor treino para seu objetivo <br/> e comece o quanto antes.
                        </p>
                        <Link to={`/categorias`}>
                            <button className='text-slate-100 p-2 my-5 bg-[#14B467] hover:bg-[#129858]'>
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
                                Quer mais praticidade e eficiência na sua jornada fitness? <br/>
                                Com o Praça Fit, você tem uma plataforma exclusiva para monitorar seu peso e IMC, ajudando você a acompanhar sua evolução de forma simples e intuitiva. 📊💪
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

export default Home