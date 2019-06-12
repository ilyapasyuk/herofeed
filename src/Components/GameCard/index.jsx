import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import variables from '../styles/variables'

const useStyles = createUseStyles({
    GameCard: {
        display: 'block',
        padding: 0,
        background: 'white',
        position: 'relative',
        borderRadius: variables.baseSize,
        marginBottom: 20,
        border: '1px solid #e6e6e6',
        width: '100%',
        overflow: 'hidden',
    },
    title: {
        paddingTop: variables.baseSize * 3,
        paddingBottom: variables.baseSize * 3,
        paddingLeft: variables.baseSize * 4,
        paddingRight: variables.baseSize * 4,
        fontSize: '14px',
        margin: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        borderBottom: '1px solid #e6e6e6',
    },
    realise: {
        paddingTop: variables.baseSize * 3,
        paddingBottom: variables.baseSize * 3,
        paddingLeft: variables.baseSize * 4,
        paddingRight: variables.baseSize * 4,
        fontSize: '12px',
        opacity: 0.4,
    },
    platforms: {
        paddingTop: variables.baseSize * 3,
        paddingBottom: variables.baseSize * 3,
        paddingLeft: variables.baseSize * 4,
        paddingRight: variables.baseSize * 4,
        fontSize: '12px',
        display: 'flex',
        overflowX: 'auto',
    },
    platform: {
        backgroundColor: variables.completeLighter,
        borderRadius: variables.baseSize,
        whiteSpace: 'nowrap',
        paddingTop: variables.baseSize,
        paddingBottom: variables.baseSize,
        paddingLeft: variables.baseSize * 2,
        paddingRight: variables.baseSize * 2,
        marginRight: variables.baseSize * 2,
    },
})

const GameCard = ({ title, realise, platforms }) => {
    const styles = useStyles()
    return (
        <div className={styles.GameCard}>
            <div className={styles.title}>{title}</div>
            <div className={styles.realise}>{realise}</div>
            <div className={styles.platforms}>
                {platforms.map(platform => (
                    <span className={styles.platform} key={platform}>
                        {platform}
                    </span>
                ))}
            </div>
        </div>
    )
}

GameCard.propTypes = {
    title: PropTypes.string.isRequired,
    realise: PropTypes.string.isRequired,
    platforms: PropTypes.array.isRequired,
}

export default GameCard
