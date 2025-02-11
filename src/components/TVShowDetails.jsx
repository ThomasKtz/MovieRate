import s from "./TVShowDetails.module.css";

export function TVShowDetails({ TVShow }) {
    return (
        <div>
            <div className={s.title}>{TVShow.name}</div>
            <div>{TVShow.vote_average}</div>
            <div className={s.overview}>{TVShow.overview}</div>
        </div>
    );
}
