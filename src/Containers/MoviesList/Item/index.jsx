import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieItem = ({ type, title, cover, slug, realise }) => (
    <Link className="Movie-item" to={`/movies/${slug}`} alt={title}>
        <div className="Movie-item__poster">
            <div id="preloader">
                <div id="loader" />
            </div>

            <span className={`Movie-item__type Movie-item__type_${type}`}>{type}</span>

            <span className="Movie-item__date-realise">{realise}</span>

            <img src={cover} alt={title} />
        </div>
        <div className="Movie-item__title">{title}</div>
    </Link>
)

MovieItem.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    slug: PropTypes.number.isRequired,
    realise: PropTypes.string.isRequired,
}

export default MovieItem
