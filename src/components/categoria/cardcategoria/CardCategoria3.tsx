import { Link } from 'react-router-dom';
import Exercicio from '../../../models/Exercicio';
import React from 'react';
import { useNavigate } from "react-router-dom";

interface CardExercicioProps {
    exercicio: Exercicio;
}

export default function CardExercicio() {
    const navigate = useNavigate();

    // Lista de exercícios recomendados
    const exercicios = [
        "Simulador de caminhada",
        "Esqui",
        "LegPress",
        "Multi exercitador",
        "Peitoral",
        "Triceps"
    ];

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagem do treino */}
            <img 
                src="https://img.freepik.com/fotos-gratis/garota-de-esportes-em-um-parque_1157-16239.jpg?t=st=1741118371~exp=1741121971~hmac=16dfa6a59a47b212321a80f1be24f6e5b65c49e37b7677c9c132e9e5eb2107b0&w=1380" 
                alt="Treinamento ao Ar Livre"
                className="w-full h-48 object-cover"
            />

            {/* Barra de título */}
            <div className="bg-green-500 text-white text-center font-bold py-2 text-lg">
                EMAGRECIMENTO LEVE
            </div>

            {/* Informações principais */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⏳</span>
                        <span className="text-gray-700 font-semibold">Duração</span>
                        <span className="text-gray-600">40 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⚡</span>
                        <span className="text-gray-700 font-semibold">Intensidade</span>
                        <span className="text-gray-600">Alta</span>
                    </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-700 text-sm mb-4">
                Com duração de aproximadamente 40 minutos e uma combinação de vários exercícios, perca gordura corporal e melhore a mobilidade.
                </p>

                {/* Lista de exercícios */}
                <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <h3 className="text-md font-semibold text-gray-800">Exercícios do treino</h3>
                    <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
                        {exercicios.map((exercicio, index) => (
                            <li key={index}>{exercicio}</li>
                        ))}
                    </ul>
                </div>

                <button 
                    className="w-full text-green-600 font-semibold text-sm py-2 mt-4 hover:underline"
                    onClick={() => navigate('/listacategorias/ListaAtencaoSaude')}
>
                        Saiba mais
                </button>

            </div>
        </div>
    );
}
 