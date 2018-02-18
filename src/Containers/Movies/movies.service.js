import axios from 'axios';
import Qs from 'qs';

/**
 * MoviesService stores the methods for obtaining data about the movies
 * @example
 * const Movies = new MoviesService();
 */
export default class MoviesService {
    /**
     * @return {Object} with movie list.
     */
    getList(query) {
        /**
         * @type {Object}
         */
        const params = {
            api_key: 'keyFR1R9B9wqDZeOz',
            ...query,
        };

        /**
         * @type {String}
         */
        const movieListUrl = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/Movies';

        return axios({
            method: 'get',
            url: movieListUrl,
            params,
            paramsSerializer: () => Qs.stringify(params, {arrayFormat: 'brackets'}),
        })
            .then((response) => response.data.records);
    }

    /**
     * @return {Object} with movie info.
     */
    getMovie(idMovie) {
        /**
         * @type {String}
         */
        const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`;

        return axios.get(idMovieUrl)
            .then((response) => response.data.records[0].fields);
    }
}
