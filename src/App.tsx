import { useMemo, useState } from "react";
import {
    FaGrinHearts,
    FaHeart,
    FaHeartBroken,
    FaMehRollingEyes,
} from "react-icons/fa";
import Background from "./components/Background";
import Hello from "./components/Hello";
import { AnimatePresence } from "framer-motion";
import QuestionWrapper from "./components/QuestionWrapper";
import Question, { QuestionForm } from "./components/Question";
import EnterSite from "./components/EnterSite";



function App() {
    const [backgroundFilled, setBackgroundFilled] = useState(false);
    const [startQuestion, setStartQuestion] = useState(false);
    const [enterSite, setEnterSite] = useState(false);

    console.log("Im in");

    const questions: QuestionForm[] = useMemo<QuestionForm[]>(() => {

        return [
            {
                question: "Bé có phải là Ngân không?",
                answer_a: {
                    icon: <FaHeart />,
                },
                answer_b: {
                    icon: <FaHeartBroken />,
                },
            },
            {
                question: "Mà phải là Nguyễn Lê THÁI Thiên Ngân hem?",
                answer_a: {
                    icon: <FaGrinHearts />,
                    onClick: () => {
                        setStartQuestion(false);
                        setEnterSite(true);
                    }
                },
                answer_b: {
                    icon: <FaMehRollingEyes />,
                },
            },
        ];
    }, []);


    return (
        <>
            <Background
                onAnimationComplete={() => {
                    setBackgroundFilled(true);
                }}
            />
            <AnimatePresence>
                {backgroundFilled && (
                    <Hello
                        userClickBtn={() => {
                            setBackgroundFilled(false);
                            setStartQuestion(true);
                        }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {startQuestion && <QuestionWrapper>
                    <Question question_data={questions[0]} />
                    <Question question_data={questions[1]} />
                </QuestionWrapper>}
            </AnimatePresence>
            <AnimatePresence>
                {enterSite && <EnterSite />}
            </AnimatePresence>




        </>
    );
}



export default App;
