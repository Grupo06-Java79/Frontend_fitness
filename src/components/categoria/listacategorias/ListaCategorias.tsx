import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardCategoria from "../cardcategoria/CardCategoria";
import CardCategoria2 from "../cardcategoria/CardCategoria2";
import CardCategoria3 from "../cardcategoria/CardCategoria3";
import CardCategoria4 from "../cardcategoria/CardCategoria4";
import CardCategoria5 from "../cardcategoria/CardCategoria5";
import CardCategoria6 from "../cardcategoria/CardCategoria6";
import Exercicio from "../../../models/Exercicio";

function ListaExercicios() {
    const navigate = useNavigate();
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

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
        <div className="w-full min-h-screen flex flex-col bg-[#CEF9A9]">
            {/* Título no topo da página */}
            
            <section 
                    className="text-center py-52 bg-cover bg-center" 
                    style={{ backgroundImage: `url('images/exercicio_topo.png')` }}
                >
                    <h2 className="text-5xl font-bold text-white mb-4 brightness-70">
                        ESCOLHA SUA CATEGORIA
                    </h2>
                        <p className="text-white text-lg mt-4 max-w-3xl text-center mx-auto">
                            Seu corpo é sua casa para a vida toda! 🏡💪 Escolha seu treino, desafie-se e conquiste sua melhor versão hoje mesmo!
                        </p>

                    <div className="mx-auto brightness-80"></div>
                </section>
            

        {/* Grid de Exercícios */}
            <div className="w-full flex justify-center my-4  bg-[#CEF9A9]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardCategoria/>
                    <CardCategoria2/>
                    <CardCategoria3/>
                    <CardCategoria4/>
                    <CardCategoria5/>
                    <CardCategoria6/>
                </div>
            </div>
        </div>
        </>
    );
}

export default ListaExercicios;
