import React, { PureComponent } from 'react'

import { getList as getMovies, TYPES as MOVIE_TYPE, FILTER as MOVIE_FILTER } from 'Services/Movies'

import MovieCard from 'Components/MovieCard'
import Filter from 'Components/Filter'

import './styles.scss'

class MovieList extends PureComponent {
    sortBy = this.props.match.params.type || undefined
    state = {
        movies: [],
    }

    componentDidMount() {
        const { sortBy } = this
        return this.setFilter(sortBy)
    }

    setFilter = sortBy => {
        this.sortBy = sortBy

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

        return this.getData(query)
    }

    getData = async query => {
        const movies = await getMovies(query)

        this.setState({
            movies,
        })
    }

    render() {
        const { movies } = this.state

        return (
            <div className="MoviesList">
                <Filter items={MOVIE_FILTER} onClick={filterId => this.setFilter(filterId)} />

                <div className="row">
                    {movies.map(movie => (
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
            </div>
        )
    }
}

export default MovieList
