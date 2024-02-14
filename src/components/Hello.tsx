import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { FaKissWinkHeart } from "react-icons/fa";
import { GiClick } from "react-icons/gi";

const btnVariants: Variants = {
    enter: {
        opacity: 1, translateX: "0vw", translateY: "10vh",
        transition: { duration: 0.5, ease: "backOut", delay: 0.5, type: 'forwards' }

    },
    waiting: {
        opacity: [0, 1, 0],
        transition: { duration: 1, repeatType: "loop", repeat: Infinity }
    }
}

const initials = {
    enter: { opacity: 0, translateX: "50vw", translateY: "50vh" },
    waiting: { opacity: 1, translateX: "0vw", translateY: "10vh" }
}

function Hello(props: HelloProps) {
    const [btnFinishedEnter, setBtnFinishedEnter] = useState(false);
    return <>
        <motion.section
            initial={{ height: "0vh" }}
            animate={{ height: "100vh" }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center w-screen flex-col">
            <motion.main
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 3 }}
                className="text-text text-3xl font-bold"
            >
                Moah
            </motion.main>
            <motion.button
                initial={btnFinishedEnter ? initials.waiting : initials.enter}
                variants={btnVariants}
                animate={btnFinishedEnter ? "waiting" : "enter"}
                onAnimationComplete={() => setBtnFinishedEnter(true)}
                className="text-5xl"
                onClick={props.userClickBtn}
            >

                <span className="flex">
                    <FaKissWinkHeart />
                    <GiClick />
                </span>
            </motion.button>
        </motion.section>
    </>
}

interface HelloProps {
    userClickBtn: () => void;
}
export default Hello;