import s from "./style.module.css";
import "./global.css";
import { TVShowAPI } from "./api/tv-show";

function App() {
    TVShowAPI.fetchPopulars();
    return (
        <div className={s.main_container}>
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
            <div className={s.tv_show_detail}>Detail</div>
            <div className={s.recommentations}>Recommendations</div>
        </div>
    );
}

export default App;
