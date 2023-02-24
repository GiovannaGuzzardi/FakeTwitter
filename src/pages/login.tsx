import { signInWithPopup } from 'firebase/auth'
import { FacebookLogo, GoogleLogo } from 'phosphor-react'
// useCallBack é uma função que chama outra função quando algo mudar
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/auth'
import { authConfig, facebookProvider, googleProvider } from '../services/firebaseConfig'

function Login() {
    // estado que armazena valor do e-mail
    const [email, setEmail] = useState("")
    const { login } = userAuth()
    // estado que armazena valor da senha
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const navigate = useNavigate();


    const signInWithGoogle = async () => {
        // tratativa de erro
        try {
            await signInWithPopup(authConfig, googleProvider);
            navigate('/firstPage')
            alert("Acesso confirmado")
        }
        catch (err) {
            console.error(err)
        }
    }

    const signInWithFacebook = async () => {
        // tratativa de erro
        try {
            await signInWithPopup(authConfig, facebookProvider);
            navigate('/firstPage')
            alert("Acesso confirmado")
        }
        catch (err) {
            console.error(err)
        }
    }
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        try {
            await login(email, password)
            // await logOut()
            navigate('/firstPage')
            alert("Acesso confirmado")
        }
        catch (e) {
            setError(e.message)
            console.error(`Erro no login de conta : ${e.message}`)
            alert("Conta invalida")
        }
    }

    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-t from-neutral-900 to-red-500 flex flex-auto items-center justify-between px-[6rem]'>
            <div className='md:flex  md:items-center self-center'>
                <img src='/img/logo.png' className='h-[20rem]' />
                <h1 className='text-[5rem] max-md:hidden text-center text-neutral-0 pl-[2rem] font-bold'>Harley Dev</h1>
            </div>
            <div className=' flex flex-col items-center bg-neutral-0 shadow-lg rounded-lg my-[1rem] justify-center p-[3rem]'>

                <button
                    onClick={signInWithGoogle}
                    className='bg-blue-700 text-white font-bold ease-in hover:bg-blue-800 rounded-md py-[0.8rem] px-[3rem] w-[20rem] m-[0.5rem] flex'
                >
                    <GoogleLogo size={24} color="#ffffff" weight="fill" />
                    <h3 className='ml-[1rem]'
                    >Entrar com o google</h3>
                </button>
                <button
                    onClick={signInWithFacebook}
                    className='bg-blue-500 text-white font-bold ease-in hover:bg-blue-600 rounded-md py-[0.8rem] px-[3rem] w-[20rem] m-[0.5rem] flex'
                >
                    <FacebookLogo size={24} color="#ffffff" weight="fill" />
                    <h3 className='ml-[1rem]'
                    >Entrar com o facebook</h3>

                </button>

                <h1
                    className='my-[1rem] font-bold text-[1.5rem]'
                >Entre na sua conta</h1>
                <form
                    onSubmit={handleSubmit}
                    id="form1"
                    className='flex flex-col'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='E-mail'
                        className='border border-neutral-400 rounded-xl p-[0.8rem] w-[20rem] m-[0.5rem]' />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='senha'
                        className='border border-neutral-400 rounded-xl p-[0.8rem] w-[20rem] m-[0.5rem]'
                    />
                    <button
                        type='submit'
                        value="Submit"
                        className='bg-red-500 text-white font-bold ease-in hover:bg-red-700 rounded-md p-[0.8rem] w-[20rem] m-[0.5rem]'
                    >
                        Entrar
                    </button>
                </form>
                <button
                    onClick={() => { alert("indisponivel") }}
                    className=' font-bold text-red-500 hover:text-red-700 my-[1rem]'
                >
                    Esqueceu a senha?
                </button>
                <p
                    className='my-[1rem]'
                >
                    Não tem uma conta?
                    <Link
                        className=' font-bold text-red-500 hover:text-red-700'
                        to="/signIn"
                    >
                        Crie aqui
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login

