
export interface PostTypeI {
    id: string;
    author: {
        name: string;
        id: string;
        role: string;
        avatar: string;
    },
    date: string
    text: string
    // comentarios
}

//  
export interface postContextI {
    acquirers: PostTypeI[];
    // lista de elementos do tipo AcquirersTypeI[]
    setAcquirers: (value: PostTypeI[]) => void;
}