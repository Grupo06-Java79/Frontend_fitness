import { Link } from "react-router-dom";


function Navbar() {
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
                    <Link 
                        to='/categorias' 
                        className='hover:underline px-5'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Categorias
                    </Link>
                    <Link 
                        to='/exercicios' 
                        className='hover:underline px-5'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Exercícios
                    </Link>
                    <Link 
                        to='/cadastrarexercicio' 
                        className='hover:underline px-5' 
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Cadastrar Exercícios
                    </Link>
                    <Link 
                        to='/sobre' 
                        className='hover:underline px-5'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        Sobre
                    </Link>
                    <Link 
                        to={`/login`} 
                        className='text-slate-100 bg-[#75BA23] hover:bg-[#61A514]  
                            flex items-center justify-center mx-5 px-4'
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} // Adicionando sombra ao texto
                    >
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
