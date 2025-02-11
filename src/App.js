import s from "./style.module.css";
import "./global.css";
import { TVShowAPI } from "./api/tv-show";
import { use, useState, useEffect } from "react";
import { BACKDROP_BASE_URL } from "./api/config";
import { TVShowDetails } from "./components/TVShowDetails";

function App() {
    // TVShowAPI.fetchPopulars();
    const [currentTVShow, setCurrentTVShow] = useState(null);
    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopularsAll();
        setCurrentTVShow(populars[0]);
    }
    useEffect(() => {
        fetchPopulars();
    }, []);
    console.log(currentTVShow);
    // console.log(currentTVShow.name);

    return (
        <div
            className={s.main_container}
            style={{
                background: currentTVShow
                    ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : "black",
            }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div>Logo</div>
                        <div>Subtitle</div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTVShow && <TVShowDetails TVShow={currentTVShow} />}
            </div>
            <div className={s.recommentations}>Recommendations</div>
        </div>
    );
}

export default App;
