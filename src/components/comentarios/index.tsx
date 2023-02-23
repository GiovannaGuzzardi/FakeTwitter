import React from 'react'



interface bla {
    coments:
    {
        howComent: string
        roleComente: string
        coment: React.ReactNode[],
        timecoment: Date
        imgComent: string

    } | undefined
}

export function Comment({ coments }: bla) {
    console.log("a")
    return (
        <div className=" mt-[2rem]" >
            <p className='my-[1rem]'>Comentários:</p>
            <div className="">
                <div className='flex  h-[4rem] items-center self-center'>
                    <img
                        src={coments?.imgComent} className=' w-[3rem] h-[3rem] rounded-full self-center outline-double'
                    />
                    <div className='flex flex-col items-start pl-[1rem] self-center'>
                        <strong>{coments?.howComent}</strong>
                        <span className='text-neutral-400'>{coments?.roleComente}</span>
                    </div>
                </div>
                <p className='w-full break-words'>{coments?.coment}</p>
                <div className='py-[1rem] text-neutral-400'>{`${coments?.timecoment}`}</div>
            </div>
        </div>
    )
}
