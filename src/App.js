import s from "./style.module.css";
import "./global.css";
import { TVShowAPI, TVShowRecommendationsAPI } from "./api/tv-show";
import { use, useState, useEffect } from "react";
import { BACKDROP_BASE_URL } from "./api/config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/logo";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";

function App() {
    const [currentTVShow, setCurrentTVShow] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopularsAll();
        setCurrentTVShow(populars[0]);
    }
    async function fetchRecommendations() {
        if (currentTVShow) {
            const recommendations =
                await TVShowRecommendationsAPI.fetchRecommendations(
                    currentTVShow.id
                );
            setRecommendations(recommendations.slice(0, 10));
        }
    }
    useEffect(() => {
        fetchPopulars();
    }, []);
    useEffect(() => {
        fetchRecommendations();
    }, [currentTVShow]);
    console.log("current", currentTVShow);
    console.log(" reco", recommendations);
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
                        <Logo
                            image={logo}
                            title="MovieRate"
                            subtitle="Find what you may like !"
                        />
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTVShow && <TVShowDetails TVShow={currentTVShow} />}
            </div>
            <div className={s.recommentations}>
                {recommendations && (
                    <TVShowList TVShowRecommendation={recommendations} />
                )}
            </div>
        </div>
    );
}

export default App;
