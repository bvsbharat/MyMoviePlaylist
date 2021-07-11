import axios from "axios";
import { searchMovie } from "./SearchMovie";

import API_Config from "./config";

axios.defaults.baseURL = API_Config.API_URL;

export { searchMovie };
