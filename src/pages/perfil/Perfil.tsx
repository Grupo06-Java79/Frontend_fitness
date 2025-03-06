import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

function Perfil() {
	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token])

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
				<img
					className="w-full h-72 object-cover border-b-8 border-white"
					src="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=pexels-jplenio-1146708.jpg&fm=jpg"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
					src={usuario.foto}
					alt={`Foto de perfil de ${usuario.nome}`}
				/>

				<div
					className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-green-900 text-white text-2xl items-center justify-center"
				>
					<p>Nome: {usuario.nome} </p>
					<p>Email: {usuario.usuario}</p>
                    {/* <p>IMC:{}</p> */}
				</div>
			</div>
		</div>
	)
}

export default Perfil
