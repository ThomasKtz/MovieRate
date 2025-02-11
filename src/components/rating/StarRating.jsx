import s from "./StarRating.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function StarRating({ rating }) {
    let stars = [];
    let full = Math.floor(rating);
    let half = rating % 1 === 0 ? 0 : 1;
    let empty = 10 - full - half;

    for (let i = 0; i < full; i++) {
        stars.push(<StarFill color="gold" key={i} />);
    }
    for (let i = 0; i < half; i++) {
        stars.push(<StarHalf color="gold" key={full + i} />);
    }
    for (let i = 0; i < empty; i++) {
        stars.push(<StarEmpty color="gold" key={full + half + i} />);
    }

    return (
        <div>
            {stars}
            <span> {rating}/10</span>
        </div>
    );
}
