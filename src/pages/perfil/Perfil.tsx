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
    } else if (imc >= 18.5 && imc < 24.99) {
      return "Saúde equilibrada";
    } else if (imc >= 25 && imc < 29.99) {
      return "Em processo de equilíbrio";
    } else if (imc >= 30 && imc < 34.99) {
      return "Atenção à saúde";
    } else if (imc >= 35 && imc < 39.99) {
      return "Saúde em foco";
    } else {
      return "Atenção à saúde integral";
    }    
  }

  const fotoPerfil = usuario.foto || "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1741890600~exp=1741894200~hmac=8a60a25fe22ba7f27d4d9b46d7488678c3eb4bb67fbbeb7b308087476a77c34b&w=740";

  return (
    <div className="flex justify-center mx-4 min-h-screen ">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          className="w-full h-72 object-cover border-b-8 border-white"
          src="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=pexels-jplenio-1146708.jpg&fm=jpg"
          alt="Capa do Perfil"
        />

        <img
          className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
          src={fotoPerfil}
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
