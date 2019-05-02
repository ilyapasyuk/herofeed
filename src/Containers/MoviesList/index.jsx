import React, { PureComponent } from 'react'

import { getList as getMovies, TYPES as MOVIE_TYPE, FILTER as MOVIE_FILTER } from 'Services/Movies'

import MovieCard from 'Components/MovieCard'
import Filter from 'Components/Filter'

import './styles.scss'

class MovieList extends PureComponent {
    state = {
        movies: [],
    }

    async componentDidMount() {
        const movies = await getMovies()
        this.setState({
            movies,
        })
    }

    render() {
        const { movies } = this.state

        return (
            <div className="MoviesList">
                {/*<Filter items={MOVIE_FILTER} onClick={filterId => this.setFilter(filterId)} />*/}

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
