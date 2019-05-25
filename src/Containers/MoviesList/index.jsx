import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import MoviesService from 'Services/Movies'

import MovieCard from '../../Components/MovieCard'
import Button from 'Components/Button'

import MOVIE_FILTER from 'Constants/moviesFilter'
import MOVIE_TYPE from 'Constants/movieTypes'

import './styles.scss'

const MovieList = ({ match }) => {
    const [movies, setMovies] = useState([])
    const [sortBy, setSort] = useState(match.params.type || undefined)
    const [dateRealiseLastItem, setDateRealiseLastItem] = useState(undefined)

    useEffect(() => {
        filterByType(sortBy)
    }, [])

    async function getMovies(query) {
        const response = await MoviesService.getList(query)
        const newMoviesData = [...movies, ...response]
        const lastItem = response[response.length - 1]

        setDateRealiseLastItem(lastItem.realise)
        setMovies(newMoviesData)
    }

    function filterByType(type) {
        setSort(type)

        const query = {
            sort: [
                {
                    field: 'date_realise',
                    direction: 'desc',
                },
            ],
        }

        if (sortBy) {
            query.filterByFormula = `{type} = "${sortBy}"`
        }

        if (sortBy === MOVIE_TYPE.ALL) {
            delete query.filterByFormula
        }

        return getMovies(query)
    }

    function handleLoadMore(date) {
        const query = {
            filterByFormula: `IS_BEFORE({date_realise}, DATETIME_PARSE('${date}'))`,
            sort: [
                {
                    field: 'date_realise',
                    direction: 'desc',
                },
            ],
        }

        return getMovies(query)
    }

    return (
        <div className="MoviesList">
            <div className="MoviesList__filter">
                {MOVIE_FILTER.map((filter) => {
                    return (
                        <NavLink
                            activeClassName="MoviesList__filter_active"
                            to={{
                                pathname: `/movies/list/${filter.type}`,
                            }}
                            key={filter.type}
                        >
                            <Button
                                elementId={`movies-${filter.type}-button`}
                                title={filter.title}
                                callBackClick={() => filterByType(filter.type)}
                            />
                        </NavLink>
                    )
                })}
            </div>

            <div className="row">
                {movies.map((movie) => (
                    <div className="col-sm-3" key={movie.id}>
                        <MovieCard
                            type={movie.type}
                            title={movie.title}
                            cover={movie.cover}
                            slug={movie.slug}
                            realise={movie.realise}
                        />
                    </div>
                ))}
            </div>

            <div className="MoviesList__more">
                <Button
                    elementId="LoadMore"
                    isPrimary
                    callBackClick={() => handleLoadMore(dateRealiseLastItem)}
                    title="Load more"
                />
            </div>
        </div>
    )
}

export default MovieList
