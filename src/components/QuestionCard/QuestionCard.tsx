
type Props = {
    title: string;
    description: string;
    tech: string[];
    difficulty: "Easy" | "Medium" | "Hard";
    companies: string[];
}
function QuestionCard({ title, description, tech, difficulty, companies }: Props) {
    return (
        <div>
            <h1>  {title}</h1>
            <p>{description}</p>
            <div>
                <p>{tech}</p>
                <p>{difficulty}</p>
                <p>{companies}</p>
            </div>

        </div>
    )
}

export default QuestionCard