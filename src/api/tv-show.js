import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "./config";

export class TVShowAPI {
    static async fetchPopularsAll() {
        const response = await axios.get(
            `${BASE_URL}tv/popular${API_KEY_PARAM}`
        );

        console.log(response.data.results);
        return response.data.results;
    }
}

export class TVShowRecommendationsAPI {
    static async fetchRecommendations(id) {
        const response = await axios.get(
            `${BASE_URL}tv/${id}/recommendations${API_KEY_PARAM}`
        );

        console.log(response.data.results);
        return response.data.results;
    }
}
