import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import ImageC from "./ImageC";

const slideVariants: Variants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            duration: .5,
            ease: "easeOut"
        },
    },
    exit: {
        scale: 0,
        transition: {
            duration: .5,
            ease: "easeIn"
        },
    },
};

function Carousel({ images }: CarouselProps) {
    const [currentIndex, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [src, changeSrc] = useState(images[0]);



    function changeImageSrc() {
        setVisible(false);

        setTimeout(() => {
            setVisible(true);
            changeSrc(images[currentIndex]);
        }, 500);
    }

    function nextImage() {
        changeImageSrc();

        if (currentIndex + 1 >= images.length) {
            setIndex(0);
            return;
        }
        setIndex((prev) => prev + 1);
    }


    function previousImage() {
        changeImageSrc();

        if (currentIndex - 1 < 0) {
            setIndex(images.length - 1);
            return;
        }
        setIndex((prev) => prev - 1);
    }
    function dotClick(index: number) {

        changeImageSrc();

        setIndex(index);
    }

    return (
        <motion.div className="mt-3 flex items-center justify-center flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            transition={{ delay: 10 }}

        >
            <div className="relative max-h-[300px] ">
                <ImageC
                    isVisible={visible}
                    src={src}
                    variants={slideVariants}
                />
            </div>



            <span className="flex justify-center gap-x-3 mt-3">
                {images.map((e, i) => (
                    <button
                        key={e + i}
                        onClick={() => dotClick(i)}
                        className={`text-xs ${i == currentIndex ? "text-primary" : "text-text"
                            }`}
                    >
                        <FaCircle />
                    </button>
                ))}
            </span>
            <div className="flex justify-center text-3xl mt-3 gap-x-3">
                <button onClick={previousImage}>
                    <FaArrowLeft />
                </button>
                <button onClick={nextImage}>
                    <FaArrowRight />
                </button>
            </div>
        </motion.div >
    );
}

interface CarouselProps {
    images: string[];
}
export default Carousel;
