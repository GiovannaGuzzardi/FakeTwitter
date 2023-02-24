import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authConfig } from '../../services/firebaseConfig';
import { AuthContextI } from "./type";

export const AuthContext = createContext<AuthContextI>({} as AuthContextI);

type IProps = { children: React.ReactNode };


export const AuthProvider: React.FC<IProps> = ({ children }) => {
    const [user, setUser] = useState({} as any)
    const [aguardando, setAguardando] = useState(true)

    // async é uma promessa await  // pode ser usado fetch e then 
    // função para criação de usuario
    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(authConfig, email, password);
    }
    const logOut = () => {
        return signOut(authConfig);
    }
    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(authConfig, email, password)
    }



    // executado assim que o componente é rendizado
    useEffect(() => {
        // se ele detectar um novo usuario ele muda o mesmo
        const unsubscribe = onAuthStateChanged(authConfig, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
            // setAguardando(false)
        };
    }, []);


    // if (aguardando) {
    //     return <>carregando...</>
    // }

    return (
        <AuthContext.Provider
            value={{ user, setUser, createUser, logOut, login }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export function userAuth() {
    return useContext(AuthContext)
}

// anotações inLine : não faço ideia do que to fazendo 
// importando do firebase opções de proteção a rota (onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut)
// vou tacar aquelas funções que eu estava fazendo direto no item aqui no context 

