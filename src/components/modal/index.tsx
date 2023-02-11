import { motion } from "framer-motion";
import { X } from "phosphor-react";
import React from "react";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "35vh",
        x: "35vw",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


const Modal = ({ handleClose, text }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-row w-[30vw] h-[30vh] bg-neutral-800 rounded-lg p-[1vw] justify-between"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <form>
                    <strong>Deixe seu comentário</strong>
                    <textarea className="text-neutral-0 bg-transparent placeholder:text-neutral-500 placeholder:text-ellipsis w-[30rem] h-[9rem] p-[0.1rem] rounded-lg resize-none my-[1rem] outline-none" placeholder="escreva seu comentário" />
                    <div className="w-full flex justify-start h-[5vh]">
                        <button
                            type="submit"
                            className="text-neutral-0 bg-primary-800 transition ease-in-out delay-150  hover:bg-primary-900 hover:text-neutral-0 rounded-lg h-[4vh]  px-[1rem] font-bold "
                        >
                            Salvar
                        </button>
                    </div>
                </form>
                <button onClick={handleClose} className="hover:bg-neutral-600 rounded-full p-[0.5vh] self-start">
                    <X size={20} color="#ede8e8" />
                </button>
            </motion.div>
        </Backdrop>
    );
};


export default Modal;