import cnn from "../../../assets/images/cnn.png";
import spgoverno from "../../../assets/images/spgoverno.png";
import uesb from "../../../assets/images/jovempam.png";

function CardSaude() {
    return (
        <>
            <section className="p-10 hidden lg:block">
                <h2 className="text-3xl font-bold text-center mb-6 mt-20">CUIDE DA SUA SAÚDE</h2>
                {/* <p className="text-center text-gray-700 lg:pl-32 lg:pr-32 text-justify">
          
          </p> */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col" style={{ minHeight: '400px' }}>
                            {/* Imagem */}
                            <img className="w-full h-48 object-cover" src={cnn} alt="Golden Retriever" />

                            {/* Conteúdo do Card */}
                            <div className="px-6 py-4 flex-grow">
                                {/* Título */}
                                <div className="font-bold text-xl mb-2">Exercícios físicos na terceira idade: veja benefícios e cuidados</div>

                                {/* Texto Descritivo */}
                                <p className="text-gray-700 text-base">
                                A prática de exercícios físicos na terceira idade é fundamental para promover o fortalecimento muscular e reverter ou reduzir o risco de sarcopenia, que é a perda de massa muscular comum no envelhecimento. Essa condição é comum em idosos devido a fatores como mudanças hormonais, redução da síntese de proteínas musculares, sedentarismo e dietas inadequadas.
                                </p>
                            </div>

                            {/* Botão "Saiba mais" */}
                            <div className="px-6 pb-4 flex justify-center">
                                <a href="https://www.cnnbrasil.com.br/saude/exercicios-fisicos-na-terceira-idade-veja-beneficios-e-cuidados/" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white w-2/3 font-bold py-2 px-4 rounded text-center">
                                    Saiba mais
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col" style={{ minHeight: '400px' }}>
                            {/* Imagem */}
                            <img className="w-full h-48 object-cover" src={spgoverno} alt="Golden Retriever" />

                            {/* Conteúdo do Card */}
                            <div className="px-6 py-4 flex-grow">
                                {/* Título */}
                                <div className="font-bold text-xl mb-2">Equipamentos de ginástica em praças incentivam a prática de exercícios</div>

                                {/* Texto Descritivo */}
                                <p className="text-gray-700 text-base">
                                    Para estimular prática de atividade física na população paulistana, a Prefeitura disponibiliza aparelhos de ginástica em 155 praças, 32 parques e em 29 clubes escola, distribuídos por todas as regiões da cidade. Pela facilidade e simplicidade dos movimentos e pela baixa intensidade dos exercícios, as academias são voltadas principalmente para o público idoso.
                                </p>
                            </div>

                            {/* Botão "Saiba mais" */}
                            <div className="px-6 pb-4 flex justify-center">
                                <a href="https://capital.sp.gov.br/web/comunicacao/w/noticias/107090" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white w-2/3 font-bold py-2 px-4 rounded text-center">
                                    Saiba mais
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col" style={{ minHeight: '400px' }}>
                            {/* Imagem */}
                            <img className="w-full h-48 object-cover" src={uesb} alt="Golden Retriever" />

                            {/* Conteúdo do Card */}
                            <div className="px-6 py-4 flex-grow">
                                {/* Título */}
                                <div className="font-bold text-xl mb-2">5 impactos da atividade física na saúde mental</div>

                                {/* Texto Descritivo */}
                                <p className="text-gray-700 text-base">
                                Em tempos de conscientização sobre saúde mental, a atividade física se destaca como uma forma acessível de promover bem-estar emocional e prevenir transtornos psicológicos. Mesmo com agendas lotadas, encontrar tempo para se exercitar é, decerto, crucial.    
                                 </p>
                            </div>

                            {/* Botão "Saiba mais" */}
                            <div className="px-6 pb-4 flex justify-center">
                                <a href="https://jovempan.com.br/edicase/5-impactos-da-atividade-fisica-na-saude-mental.html" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white w-2/3 font-bold py-2 px-4 rounded text-center">
                                    Saiba mais
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CardSaude;