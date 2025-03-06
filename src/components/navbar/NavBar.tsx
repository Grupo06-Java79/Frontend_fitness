import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


function Navbar() {

    const Navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        Navigate('/login')
    }



    return (
        <>
            <div className='w-full flex justify-center py-4 fixed top-0 left-0 right-0 text-white shadow-lg backdrop-blur-sm z-50'>
                <Link 
                    to='/home' 
                    className="text-2xl font-bold ml-10"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                >
                    PRAÇAFit
                </Link>
                <div className="container flex justify-end mx-10 text-lgq">
                {usuario.token !=='' &&
                    <Link 
                        to='/categorias' 
                        className='hover:underline px-5'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Categorias
                    </Link>
                }
                    {usuario.token !=='' && <Link 
                        to='/exercicios' 
                        className='hover:underline px-5'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Exercícios
                    </Link>}
                    
                    {usuario.token !=='' && usuario.id == 1 &&
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
                    {usuario.token !=='' &&
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                    }          
                    {usuario.id >0 &&
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
            </div>
        </>
    );
}

export default Navbar;
