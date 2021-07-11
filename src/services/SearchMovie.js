import axios from "axios";
import API_Config from "./config";

const searchMovie = async (movieParams, pageNo = 1) => {
    let result;
    if (movieParams) {
        try {
            result = await axios.get(
                `?apikey=${API_Config.API_KEY}&s=${movieParams}&page=${pageNo}&type=movie`,
            );
            return result.data;
        } catch (e) {
            console.log(e, "error");
            return {};
        }
    }
};

export { searchMovie };
