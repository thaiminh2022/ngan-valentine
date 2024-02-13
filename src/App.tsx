import { useState } from "react";
import {
    FaGrinHearts,
    FaHeart,
    FaHeartBroken,
    FaKissWinkHeart,
    FaMehRollingEyes,
} from "react-icons/fa";

const questions: QuestionForm[] = [
    {
        question: "Bé có phải là Ngân không?",
        answer_a: {
            icon: <FaHeart />,
            onClick: c => c.nextQuestion(),
        },
        answer_b: {
            icon: <FaHeartBroken />,
        },
    },
    {
        question: "Mà phải là Nguyễn Lê THÁI Thiên Ngân hem?",
        answer_a: {
            icon: <FaGrinHearts />,
            onClick: c => c.nextQuestion(),
        },
        answer_b: {
            icon: <FaMehRollingEyes />,
        },
    },
    {
        question: "Hê hê phải thì vào tiếp he",
        answer_a: {
            icon: <FaKissWinkHeart />,
        },

    },
];

function App() {
    const [question_index, set_question_index] = useState(0);
    function nextQuestion() {
        if (question_index + 1 >= questions.length) {
            return;
        }

        set_question_index((q) => q + 1);
    }

    function previousQuestion() {
        if (question_index - 1 < 0) {
            return;
        }

        set_question_index((q) => q - 1);
    }

    const question_data = questions[question_index];
    const answer_context: AnswerContext = {
        nextQuestion,
        previousQuestion,
    };

    return (
        <section className="w-screen h-screen flex items-center justify-center flex-col gap-y-3">
            <main className="text-3xl">{question_data.question}</main>
            <div className="flex gap-x-5">
                <button
                    className="text-3xl flex justify-center items-center  transition-colors hover:text-primary hover:scale-105"
                    onClick={() => {
                        if (question_data.answer_a.onClick !== undefined) {
                            question_data.answer_a.onClick(answer_context);
                        }
                    }}
                >
                    {question_data.answer_a.icon}
                </button>

                <button
                    className="text-3xl flex justify-center items-center transition-colors hover:text-gray-600 hover:scale-90"
                    onClick={() => {
                        if (question_data.answer_b?.onClick !== undefined) {
                            question_data.answer_b.onClick(answer_context);
                        }
                    }}
                >
                    {question_data.answer_b?.icon}
                </button>
            </div>
        </section>
    );
}

type QuestionForm = {
    question: string;
    answer_a: AnswerForm;
    answer_b?: AnswerForm;
};
type AnswerForm = {
    icon?: React.ReactElement;
    answer?: string;
    onClick?: (questionIndex: AnswerContext) => void;
};

type AnswerContext = {
    nextQuestion: () => void;
    previousQuestion: () => void;
};

export default App;
