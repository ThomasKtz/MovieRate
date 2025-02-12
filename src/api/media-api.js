import axios from "axios";
import {
    BASE_URL,
    API_KEY_PARAM,
    TV_SHOW_ENDPOINT,
    MOVIE_ENDPOINT,
} from "./config";

export class MediaAPI {
    static async fetchPopularsAll(isMovieMode) {
        const endpoint = isMovieMode ? MOVIE_ENDPOINT : TV_SHOW_ENDPOINT;
        const response = await axios.get(
            `${BASE_URL}${endpoint}/popular${API_KEY_PARAM}`
        );
        return response.data.results;
    }

    static async fetchRecommendations(id, isMovieMode) {
        const endpoint = isMovieMode ? MOVIE_ENDPOINT : TV_SHOW_ENDPOINT;
        const response = await axios.get(
            `${BASE_URL}${endpoint}/${id}/recommendations${API_KEY_PARAM}`
        );
        return response.data.results;
    }

    static async search(query, isMovieMode) {
        const endpoint = isMovieMode ? MOVIE_ENDPOINT : TV_SHOW_ENDPOINT;
        const response = await axios.get(
            `${BASE_URL}search/${endpoint}${API_KEY_PARAM}&query=${encodeURIComponent(
                query
            )}`
        );
        return response.data.results;
    }
}
