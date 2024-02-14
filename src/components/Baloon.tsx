import { motion } from "framer-motion";
import { useRef } from "react";
import { BsBalloonFill, BsFillHeartFill } from "react-icons/bs";

function Baloon() {
    const ref = useRef(null);

    return (
        <section className="w-screen h-screen absolute pointer-events-none z-10" ref={ref}>
            {new Array(5).fill(0).map((_, i) => (
                <motion.div
                    key={"baloon" + i}
                    drag
                    className="text-5xl absolute text-primary pointer-events-auto cursor-pointer"
                    dragConstraints={ref}
                    transition={{ type: "spring" }}
                    style={{
                        x: random(0, screen.availWidth),
                        y: random(0, screen.availHeight),
                    }}
                >
                    <BsBalloonFill />
                </motion.div>
            ))}

            {new Array(5).fill(0).map((_, i) => (
                <motion.div
                    key={"heart" + i}
                    drag
                    className="text-5xl absolute text-secondary pointer-events-auto cursor-pointer"
                    dragConstraints={ref}
                    transition={{ type: "spring" }}
                    style={{
                        x: random(0, screen.availWidth),
                        y: random(0, screen.availHeight),
                    }}
                >
                    <BsFillHeartFill />
                </motion.div>
            ))}
        </section>
    );
}

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export default Baloon;
