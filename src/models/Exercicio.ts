import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    aparelho: string;
    serie: number;
    repeticao: number;
    foto:string;
    categoria: Categoria | null;
    usuario: Usuario | null;

}