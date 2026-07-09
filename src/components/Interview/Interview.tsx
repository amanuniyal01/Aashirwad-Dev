import { useState } from "react"
import "./Interview.css"
import { mockData } from "../../constants/MockData"
import QuestionCard from "../QuestionCard/QuestionCard"
function Interview() {
    const [interviewData] = useState(mockData)
    return (
        <div className="interview-Container">
            {interviewData.map((interview) => (
                <QuestionCard
                    key={interview.id}
                    title={interview.title}
                    description={interview.description}
                    difficulty={interview.difficulty}
                    companies={interview.companies}
                    tech={interview.tech}
                    time={interview.time} />
            ))}
        </div>
    )
}

export default Interview