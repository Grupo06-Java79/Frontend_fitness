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
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import FormExercicio from './components/exercicio/formexercicio/FormExercicio'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import DeletarExercicio from './components/exercicio/deletarexercicio/DeletarExercicio'
import Perfil from './pages/perfil/Perfil'
import ListaAbaixoDoPeso from './components/categoria/listacategorias/ListaAbaixoDoPeso'
import ListaPesoNormal from './components/categoria/listacategorias/ListaPesoNormal';
import ListaSobrepeso from "./components/categoria/listacategorias/ListaSobrepeso";
import ListaObesidade from "./components/categoria/listacategorias/ListaObesidade";
import Alongamento from "./components/categoria/listacategorias/Alongamento";
import Aquecimento from "./components/categoria/listacategorias/Aquecimento";
import Sobre from './pages/sobre/Sobre'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'



function App() {
  return (
    <>  
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrar" element={<Cadastrar />} />
              <Route path="/login" element={<Login />} />
              <Route path="/exercicios" element={<ListaExercicios />} />
              <Route path="/categorias" element={<ListaCategorias/>}/>
              <Route path="/usuarios" element={<ListaUsuarios/>}/>
              <Route path="/editarexercicio/:id" element={<FormExercicio/>}/>
              <Route path="/editarcategoria/:id" element={<FormCategoria/>}/>
              <Route path="/cadastrarexercicio" element={<FormExercicio/>}/>
              <Route path="/cadastrarcategoria" element={<FormCategoria/>}/>
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/deletarexercicio/:id" element={<DeletarExercicio />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/listacategorias/ListaAbaixoDoPeso" element={<ListaAbaixoDoPeso />} />
              <Route path="/listacategorias/ListaPesoNormal" element={<ListaPesoNormal />} />
              <Route path="/listacategorias/ListaSobrepeso" element={<ListaSobrepeso />} />
              <Route path="/listacategorias/ListaObesidade" element={<ListaObesidade />} />
              <Route path="/listacategorias/Alongamento" element={<Alongamento />} /> 
              <Route path="/listacategorias/Aquecimento" element={<Aquecimento />} /> 
              <Route path='/sobre' element={<Sobre />} />         
           </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
