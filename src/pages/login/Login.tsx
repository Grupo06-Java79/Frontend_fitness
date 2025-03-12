import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import Cadastrar from '../cadastrar/Cadastrar';
import logo from '../../../public/images/logopraca.png';

function Login() {

    useEffect(() => {
        document.body.classList.add('login-page');

        return () => {
            document.body.classList.remove('login-page');
        };
    }, []);

    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario?.token) {
            navigate('/home');
        }
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
      
        <div className="login-container">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="wrapper flex items-center justify-center py-56">
                <div className="card-switch">
                    <label className="switch">
                        <input className="toggle" type="checkbox" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className="flip-card__inner">
                            <div className="flip-card__front">
                                <div className="title">Login</div>
                                <form onSubmit={login} className="flip-card__form flex flex-col items-center">
                                    <input
                                        type="text"
                                        placeholder="Usuário"
                                        name="usuario"
                                        className="flip-card__input"
                                        value={usuarioLogin.usuario || ''}
                                        onChange={atualizarEstado}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Senha"
                                        name="senha"
                                        className="flip-card__input"
                                        value={usuarioLogin.senha || ''}
                                        onChange={atualizarEstado}
                                    />
                                    <button className="flip-card__btn flex justify-center" type="submit" disabled={isLoading}>
                                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : "Entrar"}
                                    </button>
                                </form>
                            </div>
                            <div className="flip-card__back flex flex-col items-center">

                                <div className="title">Cadastrar</div>
                                <Cadastrar />
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Login;