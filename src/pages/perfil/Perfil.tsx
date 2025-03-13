import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import Usuario from "../../models/Usuario";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado","alerta");
      navigate("/");
    }
  }, [usuario.token]);

  const [cliente, setCliente] = useState<Usuario>({} as Usuario);

  async function buscaDados() {
    try {
      await buscar(`usuarios/${usuario.id}`, setCliente, {
        headers: { Authorization: usuario.token },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscaDados();
  }, [usuario.id]);

  function classificarIMC(imc: number): string {
    if (imc < 18.5) {
      return "Necessita de atenção nutricional";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Saúde equilibrada";
    } else if (imc >= 25 && imc < 29.9) {
      return "Em processo de equilíbrio";
    } else if (imc >= 30 && imc < 34.9) {
      return "Atenção à saúde";
    } else if (imc >= 35 && imc < 39.9) {
      return "Saúde em foco";
    } else {
      return "Atenção à saúde integral";
    }    
  }

  return (
    <div className="flex justify-center mx-4 min-h-screen">
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
          <p>
            Imc: {cliente.imc?.toFixed(2)} - {cliente.imc ? classificarIMC(cliente.imc) : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
