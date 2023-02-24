import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/auth'

export function SignUp() {
    // estado que armazena valor do e-mail
    const [email, setEmail] = useState("")
    // estado que armazena valor da senha
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const { createUser } = userAuth()

    const navigate = useNavigate();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            alert("Conta criada com sucesso")
            // await logOut()
            navigate('/firstPage')
        }
        catch (e) {
            setError(e.message)
            console.error(`Erro na criação de conta : ${e.message}`)
            alert("conta ja existe")
        }
    }


    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-t from-neutral-900 to-red-500 flex flex-auto items-center justify-center px-[10rem]'>
            <div className=' flex flex-col items-center bg-neutral-0 shadow-lg rounded-lg my-[1rem] justify-center p-[2rem]'>
                <h1
                    className='my-[1rem] font-bold text-[1.5rem]'
                >Junte-se a nós</h1>
                <form
                    className='flex flex-col'
                    onSubmit={handleSubmit}
                    id="form1"
                >
                    <input
                        type="text"
                        placeholder='Nome'
                        className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]' />
                    <input
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='E-mail'
                        className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                    />
                    <input
                        required
                        minLength={8}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Senha'
                        className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                    />
                    <input
                        type="password"
                        placeholder='Confirmar senha'
                        className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                    />
                </form>
                <button
                    type='submit'
                    form="form1"
                    value="Submit"
                    className='bg-red-500 text-white font-bold ease-in hover:bg-red-700 rounded-md p-[0.8rem] w-[20rem] m-[0.5rem]'
                >
                    Criar conta
                </button>
                <p
                    className='my-[1rem]'
                >
                    Já tem uma conta?
                    <Link
                        className=' font-bold text-red-500 hover:text-red-700'
                        to="/"
                    >
                        Logue aqui
                    </Link>
                </p>
            </div>
        </div>
    )
}
