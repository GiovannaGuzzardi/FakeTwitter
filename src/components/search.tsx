import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'


export function Search() {
    return (
        <aside className='bg-neutral-700 rounded-2xl overflow-hidden mb-[2vh]' >
            <div className='flex flex-col'>
                <button className='h-[2.5rem] text-neutral-400 hover:bg-neutral-600 flex items-center max-md:px-[6rem] md:px-[1rem] '>
                    <MagnifyingGlass size={20} className='mx-[0.5rem]' />
                    busca
                </button>
            </div>
        </aside>
    )
}
