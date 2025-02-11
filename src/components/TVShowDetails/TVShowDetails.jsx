import s from "./TVShowDetails.module.css";
import { StarRating } from "../rating/StarRating";

export function TVShowDetails({ TVShow }) {
    const rating = TVShow.vote_average;
    return (
        <div>
            <div className={s.title}>{TVShow.name}</div>
            <div>
                <StarRating rating={rating} />
            </div>
            <div className={s.overview}>{TVShow.overview}</div>
        </div>
    );
}
