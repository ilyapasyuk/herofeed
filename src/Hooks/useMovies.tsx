import { useEffect, useState } from 'react'
import { getList, Movie } from 'Services/movies'

interface query {}

const useMovies = (query: query) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isMoviesLoading, setLoading] = useState<boolean>(false)

    const getMovies = async query => {
        try {
            setLoading(true)
            const result = await getList(query)
            setMovies(result)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        getMovies(query)
    }, [query])

    return { movies, isMoviesLoading }
}

export { useMovies }
