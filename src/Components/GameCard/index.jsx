import React from 'react'

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

export default GameCard
