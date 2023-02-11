import { motion } from 'framer-motion';
import { ChatsCircle, Heart } from 'phosphor-react';
import React, { useState } from 'react';
import { Comment } from './comentarios';
import Modal from './modal';

// dados que eu preciso em post
//// author: { avatar_url: "" , name: "", role: "cargo" }
//// publishedat: date
//// content: ""
//// comentarios

export function Post() {
    function modal() {
        alert("s")
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [comentOpen, setComentOpen] = useState(false)


    const openComent = () => {
        setComentOpen(true)
    }

    const closeComent = () => {
        setComentOpen(false)
    }

    const close = () => {
        setModalOpen(false)
    }
    const open = () => {
        setModalOpen(true)
    }

    return (
        <article
            className='md: max-md:border-b max-md:border-neutral-300 md:hover:bg-neutral-700 md:rounded-lg overflow-hidden max-md:p-[1rem] md:p-[2.5rem] mb:mb-[1.5rem] md:hover:border md:hover:border-neutral-700 '
        >
            <div
                onClick={() => comentOpen ? closeComent() : openComent()}
            >
                <header className='flex  h-[4rem] items-center self-center'>
                    <img
                        src="/img/pessoa.jpg" className=' w-[3rem] h-[3rem] rounded-full self-center outline-double'
                    />
                    <div className='flex flex-col items-start pl-[1rem] self-center'>
                        <strong>Giovanna Guzzardi</strong>
                        <span className='text-neutral-400'>Web Developer</span>
                    </div>
                </header>
                <div className='py-[1rem] flex max-w-[60rem] max-md:flex-col-reverse overflow-hidden'>
                    <img
                        src="/img/pessoa.jpg" className='max-w-[18rem] max-h-[18rem] rounded-lg max-md:self-center'
                    />
                    <div className='pl-[1rem] max-md:mb-[1rem]'>
                        <p>bla bla bla</p> {/* titulo */}
                        <p>sit quos cum ratione quaerat? Praesentium distinctio iste cum consectetur quos ratione voluptatum facilis aspernatur labore qui sit rerum omnis ex, laboriosam corporis minima cupiditate voluptate! Non?</p>
                        <a href="produtos.html">produtos.html</a> {/*link  */}
                        <p>#tag </p>
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-between'>
                <time className='text-neutral-400 '> publicado há 1h</time>
                <div className='flex'>
                    <div className='flex items-center w-[5rem]'>
                        <h3>2</h3>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="mx-2"
                            onClick={() => (modalOpen ? close() : open())}
                        >
                            <ChatsCircle
                                size={24}
                                color="#b0b0b0"
                            />
                        </motion.button>
                    </div>
                    <div className='flex items-center w-[5rem]'>
                        <h3>20</h3>
                        <button className='mx-2'><Heart size={24} color="#b0b0b0" /></button>
                    </div>
                </div>
            </div>
            {comentOpen && <Comment />}
            {modalOpen && <Modal text={""} handleClose={close} />}
        </article>
    )
}
