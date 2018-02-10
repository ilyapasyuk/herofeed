import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './style.scss';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.data.type,
            title: props.data.title_ru,
            cover: props.data.cover[0].thumbnails.large.url,
            id: props.data.id,
        };
    }

    render() {
        const {
            type,
            title,
            cover,
            id,
        } = this.state;

        return (
            <div className="movie-item">
                <div className="movie-item__poster">
                    <span className={`movie-item__type movie-item__type_${type}`}>
                        {type}
                    </span>

                    <img src={cover} />
                </div>
                <Link
                    className="movie-item__title"
                    to={`movie/${id}`}
                >
                    {title}
                </Link>
            </div>
        );
    }
}

MovieItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MovieItem;
