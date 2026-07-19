import { useState } from "react"
import { defaultCourse } from "../../Interfaces/CourseDataModal"
import type { CourseData } from "../../Interfaces/CourseDataModal"
function Courses() {
    const [coursesData, setCoursesData] = useState<CourseData>(defaultCourse)
    return (
        <div>

        </div>
    )
}

export default Courses