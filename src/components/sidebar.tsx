import { PencilSimpleLine } from 'phosphor-react'
import React from 'react'
import { Search } from './search'


export function SideBar() {
    return (
        <aside className='bg-neutral-700 hover:border hover:border-neutral-700 md:rounded-lg overflow-hidden max-md:w-[18rem] self-start max-md:absolute max-md:h-[88vh]' >
            <img
                src="/img/flores.jpg" className='w-full h-[72px] object-cover'
            />

            <div className='flex flex-col items-center mt-5 my-[1rem] max-md:'>
                <img
                    src="/img/pessoa.jpg" className=' w-[6rem] h-[6rem] rounded-full object-center mt-[-3.4rem] border-4 border-neutral-700 m-[1rem] outline-double outline-lime-600'
                />
                <strong>Giovanna Guzzardi</strong>
                <span className='text-neutral-400'>Web Developer</span>
                <span className='text-neutral-200 text-[0.8rem] text-center mx-[1rem] my-[0.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos of!</span>
            </div>
            <footer className='border-t border-primary-800 mt-[1.5rem] mx-[2rem] '>
                <a href="#" className='text-neutral-0 bg-primary-800 transition ease-in-out delay-150  hover:bg-primary-900 hover:text-neutral-0 rounded-2xl h-[50px]  px-[0.5rem] my-[1.5rem] font-bold flex items-center self-center justify-center'>
                    <PencilSimpleLine size={20} className='mx-[0.5rem]' />
                    Editar seu perfil
                </a>
            </footer>
            <div className=' md:hidden'><Search /></div>
        </aside>
    )
}
