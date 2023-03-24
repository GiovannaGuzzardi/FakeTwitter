import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authConfig, db, storage } from '../../services/firebaseConfig';
import { AuthContextI, CreateUserProps } from "./type";

export const AuthContext = createContext<AuthContextI>({} as AuthContextI);

type IProps = { children: React.ReactNode };


export const AuthProvider: React.FC<IProps> = ({ children }) => {
    const [user, setUser] = useState({} as any)
    const [createUserDatabase, setCreateUserDatabase] = useState<CreateUserProps>({ render: 0 } as CreateUserProps)

    const createUser = (email: string, password: string) => {
        setCreateUserDatabase({ ...createUserDatabase, render: createUserDatabase.render + 1 })
        return createUserWithEmailAndPassword(authConfig, email, password)
            .then((userCredential) => {
                // O usuário foi criado com sucesso
                const user = userCredential.user;
                const userId = user.uid;

                // Adiciona informações do usuário ao Firestore
                return databaseUsers(userId);
            })
            .catch((error) => {
                // Ocorreu um erro na criação do usuário
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Erro na criação do usuário: ${errorCode} - ${errorMessage}`);
                throw error; // Propaga o erro para ser tratado posteriormente
            });
    };

    const databaseUsers = async (userId: string) => {
        const storageRef = ref(storage, `images/${createUserDatabase.avatar_image}`);

        try {
            const snapshot = await uploadBytes(storageRef, createUserDatabase.avatar_image);
            const avatarImageUrl = await getDownloadURL(storageRef);

            const userRef = await addDoc(collection(db, "users"), {
                userId: userId,
                email: createUserDatabase.email,
                phone: createUserDatabase.phone,
                name: createUserDatabase.name,
                role: createUserDatabase.role,
                description: createUserDatabase.description,
                avatar_image_url: avatarImageUrl,
            });

            console.log("Objeto adicionado com sucesso com o ID: ", userRef.id);
        } catch (e) {
            console.error("Erro ao adicionar objeto: ", e);
        }
    };



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
            value={{ user, setUser, createUser, logOut, login, createUserDatabase, setCreateUserDatabase }}
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

