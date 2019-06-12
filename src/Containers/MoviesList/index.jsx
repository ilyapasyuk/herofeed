import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-grid-system'

import { getList as getMovies, TYPES as MOVIE_TYPE, FILTER as MOVIE_FILTER } from 'Services/Movies'

import MovieCard from 'Components/MovieCard'
import Filter from 'Components/Filter'

function setType(type) {
    return type === MOVIE_TYPE.ALL ? '' : `{type} = "${type}"`
}

const MovieList = ({ match }) => {
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState(MOVIE_FILTER)

    async function getData(type) {
        const filterByFormula = setType(type)
        const result = await getMovies(filterByFormula)
        setMovies(result)
        setFilter(
            MOVIE_FILTER.map(filterItem => ({
                ...filterItem,
                isSelect: filterItem.id === type,
            })),
        )
    }

    useEffect(() => {
        const type = match.params.type || MOVIE_TYPE.ALL

        getData(type)
    }, [])

    return (
        <div className="MoviesList">
            <Filter items={filter} onClick={type => getData(type)} />

            <Row>
                {movies.map(movie => (
                    <Col sm={3} key={movie.id}>
                        <MovieCard
                            id={movie.id}
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
