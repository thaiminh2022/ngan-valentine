import { useEffect, useState } from "react";
import { confetti_from_side, valentine_confetti } from "../confetti_api";
import { motion } from "framer-motion";
import { GetDiff, GetFull } from "../date_api";
import { FaCalendar } from "react-icons/fa";
import Carousel from "./Carousel";
import Baloon from "./Baloon";

type DateDisplayMode = "full" | "years" | "months" | "weeks" | "days" | "hours";

function EnterSite() {
    const [displayMode, setDisplayMode] = useState<DateDisplayMode>("full");
    const [showed, setShowed] = useState(false);


    function nextDisplay() {
        if (displayMode == "full") {
            setDisplayMode("years");
        } else if (displayMode == "years") {
            setDisplayMode("months");
        } else if (displayMode == "months") {
            setDisplayMode("weeks");
        } else if (displayMode == "weeks") {
            setDisplayMode("days");
        } else if (displayMode == "days") {
            setDisplayMode("hours");
        } else if (displayMode == "hours") {
            setDisplayMode("full");
        }
    }

    function getDisplay() {
        let displayText = getTextByType();

        if (displayMode == "full") {
            return (
                <>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: showed ? 0 : 6 }}
                    >
                        {full.years} năm{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: showed ? 0 : 7 }}
                    >
                        {full.months} tháng{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: showed ? 0 : 8 }}
                        onAnimationComplete={() => setShowed(true)}
                    >
                        {full.days} ngày
                    </motion.span>
                </>
            );
        } else
            return (
                <>
                    <span>
                        {GetDiff(displayMode)} {displayText}
                    </span>
                </>
            );
    }
    function getTextByType() {
        let displayText;

        if (displayMode == "full") {
            displayText = "toàn bộ";
        } else if (displayMode == "years") {
            displayText = "năm";
        } else if (displayMode == "months") {
            displayText = "tháng";
        } else if (displayMode == "weeks") {
            displayText = "tuần";
        } else if (displayMode == "days") {
            displayText = "ngày";
        } else if (displayMode == "hours") {
            displayText = "giờ";
        }
        return displayText;
    }

    useEffect(() => {
        confetti_from_side(3000);
        valentine_confetti();
    }, []);

    const full = GetFull();
    return (
        <>
            <Baloon />
            <div className="text-3xl p-2 w-screen h-screen">
                <div className="h-1/5">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-text font-light"
                    >
                        Hôm nay là ngày
                    </motion.p>
                    <motion.p
                        className="text-primary font-bold"
                        initial={{ opacity: 0, translateX: "100vw" }}
                        animate={{ opacity: 1, translateX: "0vw" }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        14/2/2024: Valentines
                    </motion.p>
                </div>

                <section className="flex justify-center text-center flex-col gap-3 items-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                        className="underline mt-3"
                    >
                        Vậy là anh và bé đã iu nhau được:
                    </motion.p>

                    <div className="font-bold">{getDisplay()}</div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 9, ease: "backOut" }}
                        className="w-fit h-fit flex gap-x-3"
                    >
                        <button
                            onClick={nextDisplay}
                            className="bg-secondary w-fit items-center text-text py-3 rounded-lg px-5 text-xl flex gap-x-2"
                        >
                            <FaCalendar />
                            {getTextByType()}
                        </button>

                        <button
                            onClick={valentine_confetti}
                            className="bg-secondary w-fit items-center text-text py-3 rounded-lg px-5 text-xl flex gap-x-2"
                        >
                            Bắn<span className="line-through">cum</span>tim
                        </button>
                    </motion.div>
                </section>

                <Carousel images={images} />
            </div>
        </>

    );
}
const images = [
    "https://i.imgur.com/YWPlgkD.jpg",
    "https://i.imgur.com/PGOzUqk.jpg",
    "https://i.imgur.com/mZysdEW.jpg",
    "https://i.imgur.com/IWYRhul.jpg",
    "https://i.imgur.com/Zfs6IwT.jpg",
    "https://i.imgur.com/z1q43HN.jpg",
    "https://i.imgur.com/TlJfCEc.jpg",
    "https://i.imgur.com/6FqneQ4.jpg",
    "https://i.imgur.com/gJZkx1s.jpg",
    "https://i.imgur.com/TTKB5BV.jpg",
]

export default EnterSite;
