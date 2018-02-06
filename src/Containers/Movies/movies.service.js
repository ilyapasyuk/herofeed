import axios from 'axios';
import Qs from 'qs';

export default class MoviesService {
    getList() {
        const params = {
            api_key: 'keyFR1R9B9wqDZeOz',
            sort: [{
                field: 'date_realise',
                direction: 'desc',
            }],
        };

        const movieListUrl = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/Movies';

        return axios({
            method: 'get',
            url: movieListUrl,
            params,
            paramsSerializer: () => Qs.stringify(params, {arrayFormat: 'brackets'}),
        })
            .then((response) => response.data.records);
    }

    getMovie(idMovie) {
        const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`;

        return axios.get(idMovieUrl)
            .then((response) => response.data.records[0].fields);
    }
}
