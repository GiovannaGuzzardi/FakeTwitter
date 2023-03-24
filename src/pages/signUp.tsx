import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/auth';

export function SignUp() {
    // comparação das senhas
    const [passwordtwo, setPasswordtwo] = useState("")
    const [password, setPassword] = useState("")
    const [more, setMore] = useState(false)
    const { createUser, setCreateUserDatabase, createUserDatabase } = userAuth()
    const [imageUrl, setImageUrl] = useState(""); // Estado para armazenar a URL da imagem

    const navigate = useNavigate();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target;
        if (!form.checkValidity()) {
            // Se o formulário não for válido, retorne false para impedir o envio padrão do formulário
            return false;
        }

        if (password !== passwordtwo) {
            alert("você informou senhas diferentes")
            return
        }
        try {
            await createUser(createUserDatabase.email, password)
            console.log(createUserDatabase)
            alert("Conta criada com sucesso")
            // await logOut()
            navigate('/firstPage')
        }
        catch (e) {
            console.error(`Erro na criação de conta : ${e.message}`)
            alert("conta ja existe")
        }
    }

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            if (!event.target) return;
            setImageUrl(event.target.result as string);
        };

        if (!event.target.files) return
        setCreateUserDatabase({ ...createUserDatabase, avatar_image: event.target.files[0] })
    };

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
                    <div
                        className='flex items-end'
                    >
                        <div className='flex flex-col'>
                            {more && <span className='ml-3 text-red-300 text-xs' >*Campo obrigatório</span>}
                            <input
                                required
                                onInvalid={() => { setMore(true) }}
                                placeholder='Nome'
                                onChange={(e) => { setCreateUserDatabase({ ...createUserDatabase, name: e.target.value }) }}
                                className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='ml-3 text-red-300 text-xs' >{""}</span>
                            <input
                                type="text"
                                placeholder='Profissão'
                                onChange={(e) => { setCreateUserDatabase({ ...createUserDatabase, role: e.target.value }) }}
                                className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]' />
                        </div>
                    </div>
                    <div
                        className='flex items-end'
                    >
                        <div className='flex flex-col'>
                            {more && <span className='ml-3 text-red-300 text-xs' >*Campo obrigatório</span>}
                            <input
                                required
                                onInvalid={() => { setMore(true) }}
                                onChange={(e) => { setCreateUserDatabase({ ...createUserDatabase, email: e.target.value }) }}
                                type="email"
                                placeholder='E-mail'
                                className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                placeholder='Telefone'
                                onChange={(e) => { setCreateUserDatabase({ ...createUserDatabase, phone: parseInt(e.target.value) }) }}
                                className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                            />
                        </div>
                    </div>
                    <div
                        className='flex'
                    >
                        <div className='flex flex-col'>
                            {more && <span className='ml-3 text-red-300 text-xs' >*Campo obrigatório(mínimo 8 caracteres)</span>}
                            <input
                                required
                                onInvalid={() => { setMore(true) }}
                                minLength={8}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='Senha'
                                className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                            />
                        </div>
                        <div className='flex flex-col'>
                            {more && <span className='ml-3 text-red-300 text-xs' >*Campo obrigatório(mínimo 8 caracteres)</span>}
                            <input
                                required
                                onInvalid={() => { setMore(true) }}
                                onChange={(e) => setPasswordtwo(e.target.value)}
                                type="password"
                                placeholder='Confirmar senha'
                                className='border border-neutral-400 rounded-xl p-[0.8rem] w-[25rem] m-[0.5rem]'
                            />
                        </div>
                    </div>
                    <div className=' flex justify-between'>
                        <input
                            type="text"
                            placeholder='Descrição'
                            onChange={(e) => { setCreateUserDatabase({ ...createUserDatabase, description: (e.target.value) }) }}
                            className='border border-neutral-400 rounded-xl px-[0.8rem] pb-[5rem] w-[25rem] m-[0.5rem]' />
                        <div className=" flex flex-row w-[25rem]  mx-[0.5rem] py-2 gap-4 items-start">
                            <div className='flex flex-col items-start'>
                                <div>
                                    <span className='ml-3 text-xs text-neutral-700'> Escolha sua foto de perfil:</span>
                                </div>
                                <input
                                    onChange={handleFileSelect}
                                    type="file" // retorna um objeto com ultima modificação, data de modificação, nome, tamanho , tipo e teoricamente o caminho
                                    accept="image/*"  // para aceitar apenas imagem 
                                    className='border border-neutral-400 rounded-xl p-[0.8rem] w-[16em] ' />
                            </div>
                            <div className="w-[8rem] h-[8rem]">
                                {imageUrl && <img src={imageUrl} alt="Minha Imagem" className=" object-cover rounded-full h-full w-full" />}
                            </div>
                        </div>
                    </div>
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
