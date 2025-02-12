import s from "./TVShowListItem.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../api/config";

export function TVShowListItem({ TVShow }) {
    return (
        <div className={s.container}>
            <img
                className={s.img}
                src={`${SMALL_IMG_COVER_BASE_URL}${TVShow.backdrop_path}`}
                alt={TVShow.name}
            />
            <div className={s.title}>{TVShow.name}</div>
        </div>
    );
}
