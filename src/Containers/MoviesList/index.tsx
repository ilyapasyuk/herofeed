import React, { useState } from 'react'
import { Row, Col } from 'react-grid-system'

import { getList as getMovies, TYPES as MOVIE_TYPE, FILTER as MOVIE_FILTER } from 'Services/movies'

import { useMovies } from 'Hooks/useMovies'
import MovieCard from 'Components/MovieCard'
import Filter from 'Components/Filter'

function setType(type) {
    return type === MOVIE_TYPE.ALL ? '' : `{type} = "${type}"`
}

const MovieList = () => {
    document.title = 'Herofeed - Movies'
    const [query, setQuery] = useState<string>('')
    const { movies } = useMovies(query)

    async function getData(type) {
        const filterByFormula = setQuery(setType(type))
        const result = await getMovies(filterByFormula)
    }

    return (
        <div className="MoviesList">
            {/*<Filter items={filter} onClick={type => getData(type)} />*/}

            <Row>
                {movies.map(movie => (
                    <Col sm={3} key={movie.id}>
                        <MovieCard
                            id={movie.id.toString()}
                            type={movie.type}
                            title={movie.title}
                            cover={movie.cover}
                            realise={movie.realise}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default MovieList
