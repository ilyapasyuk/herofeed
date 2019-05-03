import API from './Api'

export async function getMovie(id) {
    const movieData = await API('movies').find(id)
    return movieData.fields
}

export async function getList(filterByFormula = undefined) {
    const movies = await API('movies')
        .select({ view: 'Grid view', maxRecords: 100, filterByFormula })
        .firstPage()

    return movies.map(movie => {
        const { fields } = movie

        return {
            id: movie.id,
            type: fields.type,
            title: fields.title_en,
            cover:
                fields.cover && fields.cover[0].thumbnails.large.url
                    ? fields.cover[0].thumbnails.large.url
                    : '',
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
    { title: 'All', id: TYPES.ALL, pathname: `/movies/list/${TYPES.ALL}`, isSelect: false },
    { title: 'Movies', id: TYPES.MOVIE, pathname: `/movies/list/${TYPES.MOVIE}`, isSelect: false },
    {
        title: 'TV show',
        id: TYPES.TV_SHOW,
        pathname: `/movies/list/${TYPES.TV_SHOW}`,
        isSelect: false,
    },
    {
        title: 'Animation',
        id: TYPES.ANIMATION,
        pathname: `/movies/list/${TYPES.ANIMATION}`,
        isSelect: false,
    },
]
