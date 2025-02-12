import s from "./TVShowList.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ TVShowRecommendation }) {
    return (
        <>
            <div className={s.title}>Recommendations</div>
            <div className={s.list}>
                {TVShowRecommendation.map((TVShow) => {
                    return (
                        <span key={TVShow.id} className={s.tv_show_list_item}>
                            <TVShowListItem TVShow={TVShow} />
                        </span>
                    );
                })}
            </div>
        </>
    );
}
