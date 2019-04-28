import React, { PureComponent } from 'react'
import GameItem from '../GamePage'
import GamesService from 'Services/Games'

class GameList extends PureComponent {
    state = {
        games: [],
    }

    async componentDidMount() {
        const games = await GamesService.getList()

        this.setState({
            games,
        })
    }

    render() {
        const { games } = this.state

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
}

export default GameList
