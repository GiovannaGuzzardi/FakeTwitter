export interface ComentTypeI {
    imgComent: string
    howComent: string
    roleComente: string
    coment: React.ReactNode[],
    timecoment: Date
}


export interface PostTypeI {
    id: string;
    author: {
        idAuthor: string;
        avatar: string;
        name: string;
        role: string;
    },
    date: Date
    text: React.ReactNode[],
    coments?: ComentTypeI[]
}

//  
export interface postContextI {
    post: PostTypeI[];
    // lista de elementos do tipo AcquirersTypeI[]
    setPost: (value: PostTypeI[]) => void;
}