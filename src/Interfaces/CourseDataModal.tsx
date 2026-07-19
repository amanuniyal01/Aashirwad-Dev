export interface CourseData {
    id: number;
    imageName: string;
    title: string;
    description: string;
    instructor: string;
    category: string;
    price: string;
    rating: number;
    students: string;
    duration: string;
    buttonText: string;
}

export const defaultCourse: CourseData = {
    id: 0,
    imageName: "",
    title: "",
    description: "",
    instructor: "",
    category: "",
    price: "",
    rating: 0,
    students: "",
    duration: "",
    buttonText: "",
};