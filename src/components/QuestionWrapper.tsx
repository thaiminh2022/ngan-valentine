import React, { createContext, useState } from "react";
import Question, { QuestionProps } from "./Question";
import { AnimatePresence, motion } from "framer-motion";

function QuestionWrapper(props: QuestionWrapperProps) {
    const [questionIndex, setQuestionIndex] = useState(0);

    function nextQuestion() {
        if (questionIndex + 1 >= props.children.length) {
            return;
        }
        setQuestionIndex((prev) => prev + 1);
    }
    function previousQuestion() {
        if (questionIndex - 1 < 0) {
            return;
        }
        setQuestionIndex((prev) => prev - 1);
    }

    const childs = props.children.map((e, i) => (
        <AnimatePresence>{i == questionIndex && e}</AnimatePresence>
    ));

    return (
        <motion.div
            initial={false}
            exit={{ scale: 10, rotate: 360, opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
        >
            <QuestionContext.Provider
                value={{ nextQuestion, previousQuestion }}
            >
                {childs}
            </QuestionContext.Provider>
        </motion.div>
    );
}

interface QuestionWrapperProps {
    children: React.ReactElement<QuestionProps>[];
}

export const QuestionContext = createContext<Context>({
    nextQuestion: () => { },
    previousQuestion: () => { },
});
export type Context = {
    nextQuestion: () => void;
    previousQuestion: () => void;
};

export default QuestionWrapper;
