import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/"; //Url de base pour récupérer les infos de l'API
const API_KEY_PARAM = "?api_key=4e226c3d20142e7c294fb52e075411ef"; //La clé API
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original/"; //Url de base pour récupérer les images

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(
            `${BASE_URL}tv/popular${API_KEY_PARAM}`
        );

        console.log(response);
        return response.data.results;
    }
}
