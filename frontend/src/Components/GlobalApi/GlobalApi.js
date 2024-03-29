import axios from 'axios';

const movieBase = "https://api.themoviedb.org/3";
const api_key = "27a23be4ff99daa45981e8e14fcbf888";
const getTraindingMovies = axios.get(movieBase+"/movie/top_rated?api_key="+api_key);
// 'https://api.themoviedb.org/3/movie/top_rated?api_key=27a23be4ff99daa45981e8e14fcbf888'
export default {
    getTraindingMovies
}