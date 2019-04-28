import axios from 'axios'
import API from './Api'
import Moment from 'moment'

class MoviesService {
    async getList(query) {
        const moviesData = await API.get('Movies', query)

        return moviesData.map((movie) => {
            const { fields } = movie
            return {
                id: movie.id,
                type: fields.type,
                title: fields.title_en,
                cover: fields.cover[0].thumbnails.large.url,
                slug: fields.id,
                universe: fields.universe,
                realise: Moment(fields.date_realise).format('Do MMMM YYYY'),
            }
        })
    }

    async getMovie(idMovie) {
        const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`
        const movieData = await axios.get(idMovieUrl)

        return movieData.data.records[0].fields
    }
}

export default new MoviesService()
