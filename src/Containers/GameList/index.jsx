import React, { useState, useEffect } from 'react'
import GameCard from 'Components/GameCard'
import { getList } from 'Services/Games'

export default function GameList() {
    const [games, setGames] = useState([])

    async function getGames() {
        const result = await getList()
        setGames(result)
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className="Games-list row">
            {games.map(game => (
                <div className="col-sm-3" key={game.id}>
                    <GameCard relise={game.relise} title={game.title} platforms={game.platforms} />
                </div>
            ))}
        </div>
    )
}
