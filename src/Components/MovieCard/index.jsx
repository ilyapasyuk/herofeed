import React from 'react'
import PropTypes from 'prop-types'
import Dayjs from 'dayjs'
import { createUseStyles } from 'react-jss'
import variables from '../styles/variables'

function getTypeBg(type) {
    switch (type) {
        case 'movie':
            return '#716aca'
        case 'serial':
            return '#f4516c'
        case 'animation':
            return '#34bfa3'
        default:
            return '#eaeaea'
    }
}

const useStyles = createUseStyles({
    MovieCard: {
        display: 'block',
        padding: 0,
        position: 'relative',
        marginBottom: 30,
        width: '100 %',
        overflow: 'hidden',
        textDecoration: 'none',
        boxShadow: '0 1px 15px 1px rgba(69, 65, 78, 0.08)',
        backgroundColor: '#fff',
        borderRadius: '4px',
    },

    poster: {
        overflow: 'hidden',
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '32px 32px',
        borderRadius: '4px 4px 0 0',
        zIndex: 1,
        textDecoration: 'none',
        position: 'relative',
        height: 0,
        width: '100%',
        paddingBottom: '150%',
    },

    img: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        borderRadius: 'inherit',
        objectFit: 'cover',
        zIndex: 1,
    },
    title: {
        padding: '0 20px',
        color: '#575962',
        fontWeight: 500,
        height: 50,
        lineHeight: '50px',
        position: 'relative',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderTop: '1px solid #ebedf2',
    },
    type: type => ({
        position: 'absolute',
        left: variables.baseSize * 2,
        top: variables.baseSize * 2,
        background: getTypeBg(type),
        fontSize: '0.8rem',
        lineHeight: '20px',
        minHeight: '20px',
        minWidth: '20px',
        verticalAlign: 'middle',
        textAlign: 'center',
        display: 'inline-block',
        letterSpacing: '0.6px',
        padding: '1px 10px',
        borderRadius: '0.75rem',
        color: '#fff',
        zIndex: 2,
    }),
    realise: {
        color: 'white',
        position: 'absolute',
        right: variables.baseSize * 2,
        top: variables.baseSize * 2,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: variables.baseSize,
        whiteSpace: 'nowrap',
        fontSize: '12px',
        pointerEvents: 'none',
        zIndex: 2,
    },
})

const MovieCard = ({ type, title, cover, id, realise }) => {
    const styles = useStyles(type)

    return (
        <div className={styles.MovieCard}>
            <div className={styles.poster}>
                <span className={styles.type}>{type}</span>
                <span className={styles.realise}>{Dayjs(realise).format('DD.MM.YYYY')}</span>
                {cover && <img src={cover} alt={title} className={styles.img} />}
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    realise: PropTypes.string.isRequired,
}

export default MovieCard
