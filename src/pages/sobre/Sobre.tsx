import CardSobre from "./cardsobre/CardSobre";
import img1 from "../../assets/images/fitness.png";
import img2 from "../../assets/images/exercicio.png";
import { NumberCircleOne } from "@phosphor-icons/react";
import fundo from '../../assets/images/praca.png'
import CardSaude from "./cardsaude/CardSaude";
import HistoriaPracaFit from "./historiapracafit/HistoriaPracaFit";
import { Link } from "react-router-dom";

function Sobre() {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <section className="text-center  py-52 bg-cover bg-center" style={{ backgroundImage: `url(${fundo})` }}>
                    <h2 className="text-5xl font-bold text-white mb-4 brightness-70">PRAÇA FIT</h2>
                    <div className="mx-auto brightness-80">
                        <p className="text-xl text-white mb-8 lg:pl-32 lg:pr-32  brightness-10">
                            Conectamos pessoas e promovemos saúde! Nossa plataforma revoluciona a forma como você cuida do seu bem-estar, oferecendo recomendações personalizadas de exercícios com base no seu IMC. De maneira acessível e segura, ajudamos você a aproveitar os aparelhos públicos e a manter um estilo de vida ativo e equilibrado.
                        </p>
                    </div>
                    <Link to='/cadastrar' className='hover:underline'>
                        <button className="bg-green-900 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-semibold">COMEÇAR</button>
                    </Link>
                </section>

                <HistoriaPracaFit />
                {/* CardSaude */}
                <div>
                    <CardSaude />
                </div>


                {/* Fitness Center Section */}
                <div className=" lg:pt-20">
                    <h2 className="text-3xl font-bold text-center mb-6 pt-9 ">POR QUE USAR O PRAÇA FIT?🤔</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 " >
                        {/* Coluna da Imagem */}
                        <div className="flex justify-center  ">
                            <img
                                src={img1} // Substitua pelo caminho da sua imagem
                                alt="Descrição da imagem"
                                className="rounded-lg shadow-lg w-full max-w-lg"
                            />
                        </div>

                        {/* Coluna do Título e Texto  1*/}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Monitore suas atividades físicas</h2>
                            <p className="text-gray-600 text-xl text-justify">
                                Quer mais praticidade e eficiência na sua jornada fitness? Com o Praça Fit, você tem uma plataforma exclusiva para monitorar seu peso e IMC, ajudando você a acompanhar sua evolução de forma simples e intuitiva. 📊💪
                            </p>
                        </div>
                        {/* Coluna do Título e Texto 2 */}
                        <div className="text-center md:text-left lg:pl-24">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tenha uma lista de exercícios</h2>
                            <p className="text-gray-600 text-xl text-justify">
                                Chega de dúvidas sobre quais exercícios fazer! O Praça Fit te guia na escolha do melhor treino, ajudando você a manter uma vida mais ativa e saudável. Comece agora e cuide do seu corpo com tecnologia e inovação! 🚀🔥
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={img2} // Substitua pelo caminho da sua imagem
                                alt="Descrição da imagem"
                                className="rounded-lg shadow-lg w-full max-w-md"
                            />
                        </div>
                    </div>
                </div>
                {/* Fitness Experience Section */}
                <section className="lg:pt-32 lg:p-20">
                    <h2 className="text-3xl font-bold text-center mb-6">DESENVOLVEDORES</h2>
                    <CardSobre />
                </section>
            </div>
        </>
    );
}

export default Sobre;