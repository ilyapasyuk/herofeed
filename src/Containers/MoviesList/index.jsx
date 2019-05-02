import React, { PureComponent } from 'react'

import { getList as getMovies, TYPES as MOVIE_TYPE, FILTER as MOVIE_FILTER } from 'Services/Movies'

import MovieCard from 'Components/MovieCard'
import Filter from 'Components/Filter'

import './styles.scss'

function setType(type) {
    return type === MOVIE_TYPE.ALL ? '' : `{type} = "${type}"`
}

class MovieList extends PureComponent {
    state = {
        movies: [],
    }

    componentDidMount() {
        const type = this.props.match.params.type || MOVIE_TYPE.ALL
        return this.getData(setType(type))
    }

    async getData(filterByFormula) {
        const movies = await getMovies(filterByFormula)
        this.setState({
            movies,
        })
    }

    render() {
        const { movies } = this.state

        return (
            <div className="MoviesList">
                <Filter items={MOVIE_FILTER} onClick={type => this.getData(setType(type))} />

                <div className="row">
                    {movies.map(movie => (
                        <div className="col-sm-3" key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                type={movie.type}
                                title={movie.title}
                                cover={movie.cover}
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
