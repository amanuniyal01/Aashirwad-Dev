
type Props = {
    title: string;
    description: string;
    tech: string[];
    difficulty: "Easy" | "Medium" | "Hard";
    companies: string[];
    time: number
}
import { MdAccessTime } from "react-icons/md";
import "./QuestionCard.css"
import { FaReact } from "react-icons/fa";
const difficultyClass = {
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
};
function QuestionCard({ title, description, tech, difficulty, companies, time }: Props) {
    return (
        <div className="cardContainer">
            <h1>  {title}</h1>
            <p>{description}</p>
            <div className="techDetails">
                <div className="highlightDetails">
                    <div className="techStack radius-md" > <FaReact color="#61DBFB" size={20} /><p>{tech}</p></div>
                    <p className={`${difficultyClass[difficulty]} radius-md`}>
                        {difficulty}
                    </p>
                    <p>{companies}</p>
                </div>
                <div className="time">
                    <MdAccessTime /> {time} mins
                </div>
            </div>


        </div >
    )
}

export default QuestionCard