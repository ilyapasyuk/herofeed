import { Record, Attachment } from 'airtable'
import API from 'Services/api'

interface MoviesResponseDto {
    id: string
    type: string
    title_en: string
    cover: Attachment[]
    universe: string
    date_realise: string
}

export type Movie = {
    id: string
    type: string
    title: string
    cover: string
    slug: string
    universe: string
    realise: string
}

const getList = async (filterByFormula): Promise<Movie[]> => {
    try {
        const movies = await API('movies')
            .select({ view: 'Grid view', maxRecords: 100, filterByFormula })
            .firstPage()

        // @ts-ignore
        return movies.map((movie: Record<MoviesResponseDto>) => {
            return {
                id: movie.id,
                type: movie.fields.type,
                title: movie.fields.title_en,
                cover: movie.fields?.cover?.[0]?.thumbnails?.large?.url || '',
                slug: movie.id,
                universe: movie.fields.universe,
                realise: movie.fields.date_realise,
            }
        })
    } catch (e) {
        return Promise.reject(new Error(e))
    }
}

export async function getMovie(id: string) {
    const movieData: any = await API('movies').find(id)
    return movieData.fields
}

export enum TYPES {
    ALL = 'all',
    MOVIE = 'movie',
    TV_SHOW = 'serial',
    ANIMATION = 'animation',
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

export { getList }
