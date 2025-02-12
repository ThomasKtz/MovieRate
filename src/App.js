import { useState, useEffect } from "react";
import s from "./style.module.css";
import "./global.css";
import { MediaAPI } from "./api/media-api";
import { BACKDROP_BASE_URL } from "./api/config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/logo";
import logo from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
    const [currentMedia, setCurrentMedia] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [isMovieMode, setIsMovieMode] = useState(false); // Toggle séries/films

    async function fetchPopulars() {
        const populars = await MediaAPI.fetchPopularsAll(isMovieMode);
        setCurrentMedia(populars[0]);
    }

    async function fetchRecommendations() {
        if (currentMedia) {
            const recommendations = await MediaAPI.fetchRecommendations(
                currentMedia.id,
                isMovieMode
            );
            setRecommendations(recommendations.slice(0, 10));
        }
    }

    async function searchMedia(query) {
        const results = await MediaAPI.search(query, isMovieMode);
        if (results.length > 0) {
            setCurrentMedia(results[0]);
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, [isMovieMode]);

    useEffect(() => {
        fetchRecommendations();
    }, [currentMedia]);

    return (
        <div
            className={s.main_container}
            style={{
                background: currentMedia
                    ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentMedia.backdrop_path}") no-repeat center / cover`
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
                        <SearchBar onSearch={searchMedia} />
                    </div>
                    <div className="col-4">
                        <button
                            className="btn btn-dark"
                            onClick={() => setIsMovieMode(!isMovieMode)}
                        >
                            {isMovieMode
                                ? "Switch to TV Shows"
                                : "Switch to Movies"}
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentMedia && <TVShowDetails TVShow={currentMedia} />}
            </div>
            <div className={s.recommendations}>
                {recommendations && (
                    <TVShowList
                        TVShowRecommendation={recommendations}
                        onClickItem={setCurrentMedia}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
