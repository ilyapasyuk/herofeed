import React from 'react'
import PropTypes from 'prop-types'

const GameCard = ({ title, relise, platforms }) => {
    return (
        <div className="Game">
            <div className="Game__title">{title}</div>
            <div className="Game__realise">{relise}</div>
            <div className="Game__platforms">
                {platforms.map(platform => (
                    <span className="Game__platform" key={platform}>
                        {platform}
                    </span>
                ))}
            </div>
        </div>
    )
}

GameCard.propTypes = {
    title: PropTypes.string.isRequired,
    relise: PropTypes.string.isRequired,
    platforms: PropTypes.array.isRequired,
}

export default GameCard
