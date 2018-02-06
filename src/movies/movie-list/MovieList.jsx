import React, {Component} from 'react';
import MovieItem from '../movie-item/MovieItem';
import './movie-list.scss';
import MoviesService from '../movies.service';

const Movies = new MoviesService();

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        Movies.getList()
            .then((response) => {
                this.setState({
                    items: response,
                });
            });
    }

    render() {
        return (
            <div className="movies-list">
                {this.state.items.map((item) => (
                    <div
                        className="col-sm-3"
                        key={item.id}
                    >
                        <MovieItem data={item.fields} />
                    </div>
                ))}
            </div>
        );
    }
}

export default MovieList;
