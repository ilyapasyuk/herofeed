import axios from 'axios'
import API from './Api'

class MoviesService {
    getList(query) {
        return API.get('Movies', query)
    }

    getMovie(idMovie) {
        const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`

        return axios.get(idMovieUrl).then((response) => response.data.records[0].fields)
    }
}

export default new MoviesService()
