import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Dayjs from 'dayjs'

const MovieCard = ({ type, title, cover, id, realise }) => (
    <Link className="Movie-item" to={`/movie/${id}`} alt={title}>
        <div className="Movie-item__poster">
            {cover !== '' && (
                <div id="preloader">
                    <div id="loader" />
                </div>
            )}

            <span className={`Movie-item__type Movie-item__type_${type}`}>{type}</span>

            <span className="Movie-item__date-realise">{Dayjs(realise).format('DD.MM.YYYY')}</span>
            {cover && <img src={cover} alt={title} />}
        </div>
        <div className="Movie-item__title">{title}</div>
    </Link>
)

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    realise: PropTypes.string.isRequired,
}

export default MovieCard
