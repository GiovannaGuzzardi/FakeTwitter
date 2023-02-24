export interface AuthContextI {
    user: {};
    setUser: (user: boolean) => any;
    createUser: (email: string, password: string) => Promise<any>
    logOut: () => Promise<any>
    login: (email: string, password: string) => Promise<any>
}