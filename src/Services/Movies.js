import axios from 'axios'
import API from './Api'

export async function getMovie(idMovie) {
    const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`
    const movieData = await axios.get(idMovieUrl)

    return movieData.data.records[0].fields
}

export async function getList(query) {
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
            realise: fields.date_realise,
        }
    })
}

export const TYPES = {
    ALL: 'all',
    MOVIE: 'movie',
    TV_SHOW: 'serial',
    ANIMATION: 'animation',
}

export const FILTER = [
    { title: 'All', id: TYPES.ALL, pathname: `/movies/list/${TYPES.ALL}` },
    { title: 'Movies', id: TYPES.MOVIE, pathname: `/movies/list/${TYPES.MOVIE}` },
    { title: 'TV show', id: TYPES.TV_SHOW, pathname: `/movies/list/${TYPES.TV_SHOW}` },
    { title: 'Animation', id: TYPES.ANIMATION, pathname: `/movies/list/${TYPES.ANIMATION}` },
]
