import { List } from 'phosphor-react'
import React from 'react'

export function Header() {
    console.log("a")
    return (
        <div className="flex w-full  py-[1rem] bg-neutral-1000 text-center justify-between md:sticky top-0 items-center px-[1rem]" >
            <div className='flex'>
                <div className='hover:bg-neutral-600 rounded-full p-[0.5rem] transition-all'>
                    <List size={20} color="#f5f5f5" className="md:hidden" />
                </div>
            </div>
            <div className='md:flex  md:items-center self-center'>
                <img src='/img/logo.png' className='h-[3rem] pl-[2rem] pr-[2rem]' />
                <h1 className='text-[1.5rem] max-md:hidden'>Harley Dev</h1>
            </div>


            <div><List size={20} color="#282828" className="md:hidden" /></div>
        </div>
    )
}
