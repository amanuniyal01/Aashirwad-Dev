import { useState } from "react"
import "./Interview.css"
import { mockData } from "../../constants/MockData"
import QuestionCard from "../QuestionCard/QuestionCard"
import { FiRefreshCw } from "react-icons/fi"
import { Tooltip } from "../ToolTip/ToolTip"
const difficultiesOption = ["Easy", "Medium", "Hard"]
const difficultiesLevel = [" Easy to Medium to Hard", "Hard to Medium to Easy"]

const difficultiesRank: Record<string, number> = {
    Easy: 1,
    Medium: 2,
    Hard: 3
}

function Interview() {
    const [interviewData] = useState(mockData)
    const [difficulties, setDifficulties] = useState<string>("All Difficulties")
    const [language, setLanguage] = useState<string>("All Languages")
    const [difficultyOrder, setDifficultyOrder] = useState<string>("Default")

    const filteredQuestions = interviewData.filter((ques) => {
        const matchDifficulty =
            difficulties === "All Difficulties" ||
            ques.difficulty.toLowerCase() === difficulties.toLowerCase();

        const matchLanguage =
            language === "All Languages" ||
            ques.tech.includes(language);

        return matchDifficulty && matchLanguage;
    });
    const sortedOrderQuestions = [...filteredQuestions].sort((a, b) => {
        const rankA = difficultiesRank[a.difficulty]
        const rankB = difficultiesRank[b.difficulty]
        if (difficultyOrder === "Easy to Medium to Hard") {
            return rankA - rankB;
        }
        if (difficultyOrder === "Hard to Medium to Easy") {
            return rankB - rankA;
        }
        return 0;
    })
    const handleDifficultyOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDifficultyOrder(e.target.value)
        setDifficulties("All Difficulties")
    }

    const handleReset = () => {
        setDifficulties("All Difficulties")
        setLanguage("All Languages")
        setDifficultyOrder("Default")
    }
    return (
        <div className="interview-Container">

            <div className="FilterSection">
                <div className="FilterLanguages">
                    <select className="filter-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option>All Languages</option>
                        <option>JavaScript</option>
                        <option>React.js</option>
                    </select>

                    <select
                        className="filter-select"
                        value={difficulties}
                        onChange={(e) => setDifficulties(e.target.value)}
                    >
                        <option>All Difficulties</option>
                        {difficultiesOption.map((opt, index) => (
                            <option key={index}>{opt}</option>
                        ))}
                    </select>
                    <select className="filter-select" value={difficultyOrder} onChange={handleDifficultyOrder}>
                        <option>
                            Default
                        </option>
                        {difficultiesLevel.map((level) => (
                            <option>{level}</option>
                        ))}


                    </select>
                </div>
                <div onClick={handleReset} className="reset-btn">
                    <Tooltip text="Reset your Filters">
                        <button  ><FiRefreshCw size={25} /></button>
                    </Tooltip>
                </div>

            </div>

            {sortedOrderQuestions.length > 0 ? sortedOrderQuestions.map((interview) => (
                <QuestionCard
                    key={interview.id}
                    title={interview.title}
                    description={interview.description}
                    difficulty={interview.difficulty}
                    companies={interview.companies}
                    tech={interview.tech}
                    time={interview.time} />
            )) : <p>
                No Questions Found
            </p>}
        </div>
    )
}

export default Interview