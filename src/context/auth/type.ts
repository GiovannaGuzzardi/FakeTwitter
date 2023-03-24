
export interface AuthContextI {
    user: {};
    createUserDatabase: CreateUserProps
    setCreateUserDatabase: ({ render }: CreateUserProps) => any;
    setUser: (user: boolean) => any;
    createUser: (email: string, password: string) => Promise<any>
    logOut: () => Promise<any>
    login: (email: string, password: string) => Promise<any>
}

export interface CreateUserProps {
    render: number
    email: string
    phone?: number
    avatar_image: File
    name: string
    role?: string
    description?: string
}