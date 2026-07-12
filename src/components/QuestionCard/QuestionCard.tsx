
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
import { Tooltip } from "../ToolTip/ToolTip";
const difficultyClass = {
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
};
function QuestionCard({ title, description, tech, difficulty, companies, time }: Props) {
    return (
        <div className="cardContainer">
            <h1 className="heading">  {title}</h1>
            <p className="description">{description}</p>
            <div className="techDetails">
                <div className="highlightDetails">
                    {tech.map((t) => (
                        <div className="techStack padding-sm radius-md" > <FaReact color="#61DBFB" size={20} /><p>{t}</p></div>
                    ))}
                    <p className={`${difficultyClass[difficulty]} padding-sm radius-md`}>
                        {difficulty}
                    </p>
                    {/* <p className="companies">{companies.map((comp)=>(

                    ))}</p> */}
                    {companies.map((comp) => (
                        <p className="radius-md padding-sm companies">{comp}</p>
                    ))}
                </div>
                <div className="time">
                    <Tooltip text="time">
                        <MdAccessTime /> {time} mins
                    </Tooltip>
                </div>
            </div>


        </div >
    )
}

export default QuestionCard