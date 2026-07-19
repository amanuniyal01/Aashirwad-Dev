
import "./CourseCard.css"
import { FaVolumeUp } from "react-icons/fa"
export interface cardProps {
    imageSrc: string,
    imageAlt: string,
    title: string,
    badge: string,
    language: string,
    rating: number | null,
    reviews: string,
    description: string,
    button: string
}
const CourseCard = (
    { imageSrc, imageAlt, title, badge, language, rating, reviews, description, button }: cardProps
) => {
    return (
        <div className="cardWrapper">
            <div> <img className="card-image" src={imageSrc} alt={imageAlt} /></div>
            <div>  <h1 className="imageTitle">{title}</h1></div>
            <div className="smallDetails">
                <p>{badge}</p>
                <div className="flex gap-2 items-center justify-center">
                    <div><FaVolumeUp /></div>
                    <p> {language}</p>
                </div>
                <div className="ratings">
                    <p>{rating}</p>
                    <p>{reviews}</p>
                </div>
            </div>
            <div>
                <p className="description">{description}</p>
            </div>
            <div className="flex justify-end items-center">
                <button className="btn-card">{button}</button>
            </div>
        </div>
    )
}

export default CourseCard