import React, { createContext, useContext, useState } from "react";
import { DefaultContextProps } from "../types";
import { postContextI, PostTypeI } from "./types";



export const PostContext = createContext<postContextI>({} as postContextI);

const dadosMocados = [
    {
        id: "1",
        author: {
            idAuthor: "@fabio",
            avatar: 'imagem',
            name: "fabio",
            role: "sla",
        },
        date: new Date('2022-05-10 20:00:00'),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt neque nihil vitae praesentium tenetur dolores odio, commodi, molestiae rem inventore debitis adipisci velit itaque error, ipsam atque quo unde?"
    },
    {
        id: "2",
        author: {
            idAuthor: "@adriano",
            avatar: 'imagem',
            name: "adriano",
            role: "profissão",
        },
        date: new Date('2022-10-08 17:45:00'),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt neque nihil vitae praesentium tenetur dolores odio, commodi, molestiae rem inventore debitis adipisci velit itaque error, ipsam atque quo unde?"
    }
]


export const PostProvider = ({ children }: DefaultContextProps) => {
    const [post, setPost] = useState<PostTypeI[]>(dadosMocados as PostTypeI[]);
    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
};

export function usePost() {
    const context = useContext(PostContext)
    if (!context) throw new Error("Eu fazendo merda")
    return context
}


// // lembra de englobar o app com AcquirersContext la porra


// import { createContext, useContext, useState } from "react";
// import { DefaultContextProps } from "../types";
// import { acquirersContextI, AcquirersTypeI } from "./types";

// export const AcquirersContext = createContext<acquirersContextI>({

// } as acquirersContextI);


// const dadosMocados = [
//     { id: "1", name: "Beltrano", email: "bla@gmai.com", cpf: "50050050050", phone: "34900011111", action: false },
//     { id: "2", name: "Ciclano", email: "blabla@gmai.com", cpf: "60060060060", phone: "34901001111", action: false },
//     { id: "3", name: "Deltrano", email: "blablabla@gmai.com", cpf: "70070070070", phone: "349100001111", action: false }
// ]

// // aqui estou definindo meu estado e que por valor inicial eu vou receber o dadosMocados 
// export const AcquirersProvider = ({ children }: DefaultContextProps) => {
//     const [acquirers, setAcquirers] = useState<AcquirersTypeI[]>(dadosMocados as AcquirersTypeI[]);
//     return (
//         <AcquirersContext.Provider value={{ acquirers, setAcquirers }}>
//             {children}
//         </AcquirersContext.Provider>
//     );
// };

// export function useAcquirers() {
//     const context = useContext(AcquirersContext)
//     if (!context) throw new Error("Eu fazendo merda")
//     return context
// }
