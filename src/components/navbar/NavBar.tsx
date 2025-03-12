import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [hasMargin, setHasMargin] = useState(false);

    function logout() {
        handleLogout();
        alert('O Usuário foi desconectado com sucesso!');
        navigate('/login');
    }

    function toggleMenu() {
        setIsOpen(!isOpen);
        setHasMargin(!hasMargin);
    }

    return (
        <>
            <div className={`w-full flex justify-between items-center py-4 fixed top-0 left-0 right-0 text-white shadow-lg backdrop-blur-sm z-50 ${hasMargin ? 'mb-16' : ''}`}>
                <Link 
                    to='/home' 
                    className="text-2xl font-bold ml-10"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                >
                    PRAÇAFit
                </Link>
                <div className="hidden md:flex justify-end mx-10 text-lg">
                    {usuario.token !== '' &&
                        <Link 
                            to='/categorias' 
                            className='hover:underline px-5'
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                        >
                            Categorias
                        </Link>
                    }
                    {usuario.token !== '' && 
                        <Link 
                            to='/exercicios' 
                            className='hover:underline px-5'
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                        >
                            Exercícios
                        </Link>
                    }
                    {usuario.token !== '' && usuario.id === 1 &&
                        <Link 
                            to='/cadastrarexercicio' 
                            className='hover:underline px-5' 
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                        >
                            Cadastrar Exercícios
                        </Link>
                    }
                    <Link 
                        to='/sobre' 
                        className='hover:underline px-5'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Sobre
                    </Link>
                    {usuario.token !== '' &&
                        <Link to='/perfil' className='hover:underline px-5' 
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
                        >
                            Perfil
                        </Link>
                    }
                    {usuario.id > 0 &&
                        <Link 
                            to={`/login`}  onClick={logout}
                            className='text-slate-100 bg-red-600 hover:bg-red-800  
                                flex items-center justify-center mx-5 px-4'
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                        >
                            Sair
                        </Link>
                    }
                </div>
                <div className="md:hidden flex items-center mr-10">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-green-200 text-black fixed top-16 left-0 right-0 z-50">
                    <div className="flex flex-col items-center py-4">
                        {usuario.token !== '' &&
                            <Link 
                                to='/categorias' 
                                className='hover:underline py-2'
                                onClick={() => setIsOpen(false)}
                            >
                                Categorias
                            </Link>
                        }
                        {usuario.token !== '' && 
                            <Link 
                                to='/exercicios' 
                                className='hover:underline py-2'
                                onClick={() => setIsOpen(false)}
                            >
                                Exercícios
                            </Link>
                        }
                        {usuario.token !== '' && usuario.id === 1 &&
                            <Link 
                                to='/cadastrarexercicio' 
                                className='hover:underline py-2'
                                onClick={() => setIsOpen(false)}
                            >
                                Cadastrar Exercícios
                            </Link>
                        }
                        <Link 
                            to='/sobre' 
                            className='hover:underline py-2'
                            onClick={() => setIsOpen(false)}
                        >
                            Sobre
                        </Link>
                        {usuario.token !== '' &&
                            <Link 
                                to='/perfil' 
                                className='hover:underline py-2'
                                onClick={() => setIsOpen(false)}
                            >
                                Perfil
                            </Link>
                        }
                        {usuario.id > 0 &&
                            <Link 
                                to={`/login`}  onClick={logout}
                                className='text-slate-100 bg-red-600 hover:bg-red-800  
                                    flex items-center justify-center mx-5 px-4 py-2'
                                onClick={() => setIsOpen(false)}
                            >
                                Sair
                            </Link>
                        }
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
