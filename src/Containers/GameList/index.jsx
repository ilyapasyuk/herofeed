import React, { useEffect, useState } from 'react'
import GameItem from '../GamePage'
import GamesService from 'Services/Games'

const GameList = ({}) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        return getMovies()
    }, [])

    async function getMovies() {
        const games = await GamesService.getList()
        setGames(games)
    }

    return (
        <div className="Games-list row">
            {games.map((item) => (
                <div className="col-sm-3" key={item.id}>
                    <GameItem data={item.fields} />
                </div>
            ))}
        </div>
    )
}

export default GameList
