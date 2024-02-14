import React, { useContext } from "react";
import { QuestionContext } from "./QuestionWrapper";
import { motion } from "framer-motion";

function Question({ question_data }: QuestionProps) {
    const context = useContext(QuestionContext);
    return <motion.section
        initial={{ translateY: "-100vh", opacity: 0 }}
        animate={{ translateY: "0vh", opacity: 1 }}
        transition={{ delay: .1, duration: 1, ease: "backOut" }}
        className="w-screen h-screen flex items-center justify-center flex-col gap-y-5"
    >
        <main
            className="text-4xl text-center font-bold">{question_data.question}
        </main>
        <div className="flex flex-row text-3xl gap-x-5">
            <button onClick={() => {
                context.nextQuestion();
                if (question_data.answer_a.onClick) {
                    question_data.answer_a.onClick();
                }

            }}
                className="hover:text-primary hover:scale-110"
            >{question_data.answer_a.icon}</button>
            <button onClick={() => {
                context.previousQuestion();
                if (question_data.answer_b.onClick) {
                    question_data.answer_b.onClick();
                }

            }}
                className="hover:text-blue-900 hover:scale-90"

            >{question_data.answer_b?.icon}</button>
        </div>
    </motion.section>;
}

export interface QuestionProps {
    question_data: QuestionForm
}


export type QuestionForm = {
    question: string;
    answer_a: AnswerForm;
    answer_b: AnswerForm;
};
export type AnswerForm = {
    icon?: React.ReactElement;
    answer?: string;
    onClick?: () => void
};
export default Question;