import s from "./TVShowListItem.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../api/config";

export function TVShowListItem({ TVShow, onClick }) {
    return (
        <div className={s.container} onClick={() => onClick(TVShow)}>
            <img
                className={s.img}
                src={`${SMALL_IMG_COVER_BASE_URL}${TVShow.backdrop_path}`}
                alt={TVShow.name ?? TVShow.title}
            />
            <div className={s.title}>{TVShow.name ?? TVShow.title}</div>
        </div>
    );
}
