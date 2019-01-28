import React, { Component } from 'react'
import GameItem from '../GameItem'
import GamesService from 'Services/Games'

class GameList extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        GamesService.getList().then((response) => {
            this.setState({
                items: response,
            })
        })
    }

    render() {
        return (
            <div className="Games-list row">
                {this.state.items.map((item) => (
                    <div className="col-sm-3" key={item.id}>
                        <GameItem data={item.fields} />
                    </div>
                ))}
            </div>
        )
    }
}

export default GameList
