import React from 'react'

export function Comment() {
    console.log("a")
    return (
        <div className=" mt-[2rem]" >
            <p className='my-[1rem]'>Comentários:</p>
            <div className="">
                <div className='flex  h-[4rem] items-center self-center'>
                    <img
                        src="/img/pessoa.jpg" className=' w-[3rem] h-[3rem] rounded-full self-center outline-double'
                    />
                    <div className='flex flex-col items-start pl-[1rem] self-center'>
                        <strong>Giovanna Guzzardi</strong>
                        <span className='text-neutral-400'>Web Developer</span>
                    </div>
                </div>
                <p className='w-full break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus molestias voluptates fugiat dolores? Ullam dolore dicta excepturi. Ad facilis et necessitatibus architecto itaque esse molestias ipsam perferendis, earum inventore!</p>
                <div className='py-[1rem] text-neutral-400'>há dois minutos</div>
            </div>
            <div className="">
                <div className='flex  h-[4rem] items-center self-center'>
                    <img
                        src="/img/pessoa.jpg" className=' w-[3rem] h-[3rem] rounded-full self-center outline-double'
                    />
                    <div className='flex flex-col items-start pl-[1rem] self-center'>
                        <strong>Giovanna Guzzardi</strong>
                        <span className='text-neutral-400'>Web Developer</span>
                    </div>
                </div>
                <p className='w-full break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus molestias voluptates fugiat dolores? Ullam dolore dicta excepturi. Ad facilis et necessitatibus architecto itaque esse molestias ipsam perferendis, earum inventore!</p>
                <div className='py-[1rem] text-neutral-400'>há dois minutos</div>
            </div>
        </div>
    )
}
