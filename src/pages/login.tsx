import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../services/firebaseConfig'

function Login() {
    // estado que armazena valor do e-mail
    const [email, setEmail] = useState("")
    // estado que armazena valor da senha
    const [password, setPassword] = useState("")

    const navigate = useNavigate();


    // função inativa
    // async é uma promessa await  // pode ser usada fetch e then 
    const signIn = async () => {

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/firstPage')
        }
        catch (err) {
            console.error(err)
            alert("conta ja existe")
        }
    }

    const createAccont = async () => {

        try {
            // cria um user no firebase 
            // criar um modal para inserção de usuario na data base com token
            await createUserWithEmailAndPassword(auth, email, password);
            // se der tudo certo realiza o acesso a pagina inicial
            navigate('/firstPage')
        }
        catch (err) {
            console.error(err)
            // fazer notificação visual para que usuario entenda o que esta acontecendo
            alert("conta ja existe")
        }
    }

    // função inativa
    const signInWithGoogle = async () => {
        // tratativa de erro
        try {
            await signInWithPopup(auth, googleProvider);

        }
        catch (err) {
            console.error(err)
        }
    }
    return (
        <div className='w-[100vw] h-[100vh] bg-neutral-200 flex flex-auto items-center justify-center'>
            <div className=' flex flex-col items-center bg-neutral-0 w-[30rem] min-h-[20rem] shadow-lg rounded-lg my-[1rem] justify-center'>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder='E-mail'
                    className='border border-neutral-400 rounded-xl w-[26rem] p-[0.5rem] m-[0.5rem]' />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder='senha'
                    className='border border-neutral-400 rounded-xl w-[26rem] p-[0.5rem] m-[0.5rem]'
                />
                <button
                    onClick={() => { alert("função indisponivel") }}
                    className='bg-neutral-300 p-[0.8rem] w-[26rem] rounded-md mt-[1rem]'
                >
                    Entrar
                </button>
                <button>Esqueci a senha</button>
                <button
                    onClick={createAccont}
                    className='bg-neutral-300 p-[0.8rem] w-[15rem] rounded-md'
                >
                    Nova Conta
                </button>
            </div>
        </div>
    )
}

export default Login

