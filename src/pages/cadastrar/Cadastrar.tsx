import './Cadastrar.css';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import Usuario from '../../models/Usuario';

function Cadastrar() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [confirmaSenha, setConfirmaSenha] = useState<string>("");
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    function retornar() {
        navigate('/login');
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type } = e.target;

        setUsuario({
            ...usuario,
            [name]: type === 'number' ? +value : value  // se o valor for identico a number, converte para number
            // [e.target.name]: e.target.value
        });
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    }

    function limparCampos() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            imc: 0,
            peso: '' as unknown as number,
            altura: '' as unknown as number,
            idade: '' as unknown as number
        });
        setConfirmaSenha('');
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Dados enviados:", usuario); // 🟢 Depuração

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true);
            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                alert('Usuário cadastrado com sucesso!');
                limparCampos();
            } catch (error) {
                console.error("Erro ao cadastrar:", error);
                alert('Erro ao cadastrar o usuário!');
            }
        } else {
            alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.');
            setUsuario({ ...usuario, senha: '' });
            setConfirmaSenha('');
        }
        setIsLoading(false);
    }


    return (
        <>
            <form onSubmit={cadastrarNovoUsuario} className="flip-card__form flex flex-col items-center">
                <div className="grid-container">
                    <div className="column">
                        <input type="text" placeholder="Nome" name="nome" className="flip-card__input" value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input type="text" placeholder="E-mail" name="usuario" className="flip-card__input" value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input type="text" placeholder="Foto" name="foto" className="flip-card__input" value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input type="number" placeholder="Idade" name="idade" className="flip-card__input" value={usuario.idade} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    <div className="column">
                        <input type="number" placeholder="Peso" name="peso" className="flip-card__input" value={usuario.peso} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input type="number" placeholder="Altura" name="altura" className="flip-card__input" value={usuario.altura} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input type="password" placeholder="Senha" name="senha" className="flip-card__input" value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input type="password" placeholder="Confirmar Senha" name="confirmarSenha" className="flip-card__input" value={confirmaSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} />
                    </div>
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button type='submit' className='flip-card__btn flex justify-center'>
                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Cadastrar</span>}
                    </button>
                </div>
            </form>

        </>
    );
}

export default Cadastrar;