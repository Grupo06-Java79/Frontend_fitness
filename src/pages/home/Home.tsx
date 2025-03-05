import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";


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
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                            {cliente.imc}
                        </h2>
                        <p className='text-xl'>
                            {/* Testar o novo app de treinos */}
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                {/* Logar */}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home