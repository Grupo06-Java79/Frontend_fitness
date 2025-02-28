import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import './App.css'
import Cadastrar from './pages/cadastrar/Cadastrar'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ListaExercicios from './components/exercicio/listaexercicios/ListaExercicios'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import ListaUsuarios from './components/usuario/listausuarios/ListaUsuarios'

function App() {
  return (
    <>  
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Cadastrar />} />
              <Route path="/login" element={<Login />} />
              <Route path="/exercicios" element={<ListaExercicios />} />
              <Route path="/categorias" element={<ListaCategorias/>}/>
              <Route path="/usuarios" element={<ListaUsuarios/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App