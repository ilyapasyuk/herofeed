import React, { PureComponent } from 'react'
import GameCard from 'Components/GameCard'
import { getList } from 'Services/Games'

class GameList extends PureComponent {
    state = {
        games: [],
    }

    async componentDidMount() {
        const games = await getList()

        this.setState({
            games,
        })
    }

    render() {
        const { games } = this.state

        return (
            <div className="Games-list row">
                {games.map(game => (
                    <div className="col-sm-3" key={game.id}>
                        <GameCard
                            relise={game.relise}
                            title={game.title}
                            platforms={game.platforms}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default GameList
