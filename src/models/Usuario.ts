import Exercicio from "./Exercicio";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
    peso: number;
    altura: number;
    idade: number;
    exercicio: Exercicio | null;
}