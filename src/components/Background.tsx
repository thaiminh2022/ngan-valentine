import { motion } from "framer-motion";

function Background(props: Props) {


    return <motion.section
        initial={{ width: "100vw", height: 0 }}
        animate={{ height: "100vh" }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="absolute -z-20 bg-gradient-to-b from-background to-pink-300 rounded-lg"
        onAnimationComplete={props.onAnimationComplete}
    >
    </motion.section>
}

interface Props {
    onAnimationComplete?: () => void;
}

export default Background;