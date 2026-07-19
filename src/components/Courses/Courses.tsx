import { useState } from "react"
import type { CourseData } from "../../Interfaces/CourseDataModal"
import { coursesMockData } from "../../constants/CaourseData"
import CourseCard from "../CourseCard/CourseCard"
import "./Courses.css"
function Courses(
) {
    const [coursesData, setCoursesData] = useState<CourseData[]>(coursesMockData)
    return (
        <div className="courseWrapper">
            {coursesData.map((course) => (
                <CourseCard imageSrc={course.imageName}
                    imageAlt={course.title}
                    title={course.title}
                    badge={course.badge}
                    language={course.language}
                    rating={course.rating}
                    reviews={course.reviews || ""}
                    description={course.description}
                    button={course.buttonText ?? ""}
                />

            ))}
        </div>
    )
}

export default Courses