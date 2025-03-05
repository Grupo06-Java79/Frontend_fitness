import Exercicio from "./Exercicio";

export default interface Categoria {
    id: number;
    tipo: string;
    grupo: string;
    exercicio?: Exercicio | null;
}