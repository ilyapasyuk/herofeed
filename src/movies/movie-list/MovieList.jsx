import MovieItem from '../movie-item/MovieItem.jsx';
import React, {Component, PropTypes} from 'react';
import './movie-list.scss';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.list = this.props.list;
    }

    render() {
        return (
            <div className="movies-list container">
                {this.list.map((item) => {
                    return <div className={'col-sm-3'}
                                key={item.id}>
                        <MovieItem data={item.fields}>
                        </MovieItem>
                    </div>
                })}
            </div>

        );
    }
}

