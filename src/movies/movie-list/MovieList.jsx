import React, {Component} from 'react';
import MovieItem from '../movie-item/MovieItem.jsx';
import './movie-list.scss';
import MoviesService from '../movies.service';
const Movies = new MoviesService();

export default class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        Movies.getList()
            .then((response) => {
                this.setState({
                    items: response
                });
            })
    }

    render() {
        return (
            <div className="movies-list">
                {this.state.items.map((item) => {
                    return <div className="col-sm-3"
                                key={item.id}>
                        <MovieItem data={item.fields}>
                        </MovieItem>
                    </div>
                })}
            </div>
        );
    }
}

