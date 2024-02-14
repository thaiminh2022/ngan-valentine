import {
    AnimatePresence,
    Variants,
    motion,
} from "framer-motion";

function ImageC(props: ImageProps) {
    return (
        <AnimatePresence>
            {props.isVisible && (
                <motion.img
                    src={props.src}
                    className="rounded-lg w-[99%] h-[200px] md:min-h-[300px] block mx-auto object-cover"
                    variants={props.variants}
                    initial={"hidden"}
                    animate="visible"
                    exit="exit"
                    onAnimationComplete={props.onAnimationEnd}
                />
            )}
        </AnimatePresence>
    );
}

interface ImageProps {
    isVisible: boolean;
    src: string;
    variants: Variants;
    onAnimationEnd?: () => void;
}
export default ImageC;
