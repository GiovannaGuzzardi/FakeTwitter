import { List, SignOut } from 'phosphor-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../context/auth';

export function Header() {

    const navigate = useNavigate();
    const { logOut } = userAuth()

    const logOutFunc = async () => {
        // tratativa de erro
        try {
            await logOut()
            navigate('/')
            alert('você saiu da conta com sucesso')
        }
        catch (err) {
            console.error(`${err}`)
        }
    }
    return (
        <div className="flex w-full  py-[1rem] bg-neutral-1000 text-center justify-between md:sticky top-0 items-center px-[1rem]" >
            <div className='md:flex  md:items-center self-center'>
                <img src='/img/logo.png' className='h-[3rem] pl-[2rem] pr-[2rem]' />
                <h1 className='text-[1.5rem] max-md:hidden'>Harley Dev</h1>
            </div>

            <div className='px-[1rem] '>
                <List size={20} color="#282828" className="md:hidden" />
                <div
                    className='cursor-pointer'
                >
                    <SignOut
                        onClick={logOutFunc}
                        size={24} color="#ffffff" weight="bold"
                    />
                </div>
            </div>
        </div>
    )
}
