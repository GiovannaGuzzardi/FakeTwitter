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