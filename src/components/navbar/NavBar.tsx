import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 fixed text-white shadow-lg backdrop-blur-sm'>
                <Link to='/home' className="text-2xl font-bold ml-10" >PRAÇAFit</Link>
                <div className=" container flex justify-end mx-10 text-lg">
                    <Link to='/categorias' className='hover:underline px-5'>Categorias</Link>
                    <Link to='/exercicios' className='hover:underline px-5'>Exercícios</Link>
                    <Link to='/sobre' className='hover:underline px-5'>Sobre</Link>
                    <Link to={`/login`} 
                        className='text-slate-100 bg-[#75BA23] hover:bg-[#61A514] 
                            flex items-center justify-center mx-5 px-4'>
                    <button>Login</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar