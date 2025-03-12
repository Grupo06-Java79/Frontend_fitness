import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { cadastrar, login } from "../services/Service"
import Usuario from "../models/Usuario"
import { ToastAlerta } from "../utils/ToastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleCadastro: (usuario: Usuario) => Promise<void>;
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlerta("O Usuário foi autenticado com sucesso!","sucesso")
        } catch (error) {
          ToastAlerta("Os Dados do usuário estão inconsistentes!","erro")
        }
        setIsLoading(false)
    }

    async function handleCadastro(usuario: Usuario) {
        setIsLoading(true);
        try {
          const resposta = await cadastrar(`/usuarios/cadastrar`, usuario, setUsuario, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        //   setUsuario(resposta.data);
        ToastAlerta('Usuário cadastrado com sucesso!','sucesso');
        } catch (error) {
          ToastAlerta('Erro ao cadastrar o usuário!','sucesso');
        }
        setIsLoading(false);
      }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, handleCadastro, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}