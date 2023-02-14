
export interface PostTypeI {
    id: string;
    author: {
        idAuthor: string;
        avatar: string;
        name: string;
        role: string;
    },
    date: Date
    text: string
}

//  
export interface postContextI {
    post: PostTypeI[];
    // lista de elementos do tipo AcquirersTypeI[]
    setPost: (value: PostTypeI[]) => void;
}