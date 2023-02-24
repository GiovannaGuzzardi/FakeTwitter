import React from 'react'
import { Link } from 'react-router-dom'


const NotAuthorized = () => {
    return (

        <div className={`w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-neutral-800 text-neutral-0 `}>
            <h1
                className=' text-[3rem] '
            >Acesso não autorizado
            </h1>
            <p className=' text-[2rem] '>
                Para criar sua conta,
                <Link
                    className=' text-red-500 hover:text-red-700 ml-2'
                    to="/signIn"
                >
                    click aqui
                </Link>
            </p>
        </div>

    )
}

export default NotAuthorized