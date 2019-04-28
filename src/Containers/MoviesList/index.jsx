import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

import MoviesService from 'Services/Movies'

import MovieCard from '../../Components/MovieCard'
import Button from 'Components/Button'

import MOVIE_FILTER from 'Constants/moviesFilter'
import MOVIE_TYPE from 'Constants/movieTypes'

import './styles.scss'

class MovieList extends PureComponent {
    state = {
        movies: [],
        sortBy: this.props.match.params.type || undefined,
    }

    componentDidMount() {
        this.filterByType(this.state.sortBy)
    }

    filterByType(type) {
        this.setState(
            {
                sortBy: type,
            },
            () => {
                const query = {
                    sort: [
                        {
                            field: 'date_realise',
                            direction: 'desc',
                        },
                    ],
                }

                if (this.state.sortBy) {
                    query.filterByFormula = `{type} = "${this.state.sortBy}"`
                }

                if (this.state.sortBy === MOVIE_TYPE.ALL) {
                    delete query.filterByFormula
                }

                MoviesService.getList(query).then((response) => {
                    const lastItem = response[response.length - 1]
                    this.dateRealiseLastItem = lastItem.realise

                    this.setState({
                        movies: response,
                    })
                })
            },
        )
    }

    handleLoadMore(date) {
        const query = {
            filterByFormula: `IS_BEFORE({date_realise}, DATETIME_PARSE('${date}'))`,
            sort: [
                {
                    field: 'date_realise',
                    direction: 'desc',
                },
            ],
        }

        MoviesService.getList(query).then((response) => {
            const date = [...this.state.movies, ...response]

            const lastItem = response[response.length - 1]
            this.dateRealiseLastItem = lastItem.fields.date_realise

            this.setState({
                movies: date,
            })
        })
    }

    render() {
        const { movies } = this.state

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
                                    callBackClick={() => this.filterByType(filter.type)}
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
                        callBackClick={() => this.handleLoadMore(this.dateRealiseLastItem)}
                        title="Load more"
                    />
                </div>
            </div>
        )
    }
}

export default MovieList
