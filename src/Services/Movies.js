import axios from 'axios'
import API from './Api'

class MoviesService {
    getList(query) {
        return API.get('Movies', query)
    }

    async getMovie(idMovie) {
        const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`
        const movieData = await axios.get(idMovieUrl)

        return movieData.data.records[0].fields
    }
}

export default new MoviesService()
