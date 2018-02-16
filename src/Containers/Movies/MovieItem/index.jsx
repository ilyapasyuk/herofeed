import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './style.scss';
import Moment from 'moment';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.data.type,
            title: props.data.title_ru,
            cover: props.data.cover[0].thumbnails.large.url,
            id: props.data.id,
            dateRealise: Moment(props.data.date_realise).format('Do MMMM YYYY'),
        };
    }

    render() {
        const {
            type,
            title,
            cover,
            id,
            dateRealise,
        } = this.state;

        return (
            <div className="movie-item">
                <div className="movie-item__poster">
                    <span className={`movie-item__type movie-item__type_${type}`}>
                        {type}
                    </span>

                    <span className="movie-item__date-realise">
                        {dateRealise}
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
