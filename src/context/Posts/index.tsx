import { createContext } from "react";
import { PostTypeI } from "./types";

export const AcquirersContext = createContext<PostTypeI>({

} as PostTypeI);

const dadosMocados = [
    {
        id: "1",
        author: {
            name: "fabio",
            id: "@fabio",
            role: "sla",
        },
        date: "01-01-02",
        text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
]

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
