
type Props = {
    title: string;
    description: string;
    tech: string[];
    difficulty: "Easy" | "Medium" | "Hard";
    companies: string[];
    time: number
}
import "./QuestionCard.css"
function QuestionCard({ title, description, tech, difficulty, companies, time }: Props) {
    return (
        <div className="cardContainer">
            <h1>  {title}</h1>
            <p>{description}</p>
            <div className="techDetails">
                <div className="highlightDetails">
                    <p>{tech}</p>
                    <p>{difficulty}</p>
                    <p>{companies}</p>
                </div>
                <div className="time">
                    {time} mins
                </div>
            </div>


        </div>
    )
}

export default QuestionCard