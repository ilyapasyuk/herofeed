import React, { Component } from 'react'
import GameItem from '../GameItem'
import './style.scss'
import GamesService from '../games.service'

const Games = new GamesService()

export default class GameList extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        Games.getList().then((response) => {
            this.setState({
                items: response,
            })
        })
    }

    render() {
        return (
            <div className="Games-list">
                {this.state.items.map((item) => (
                    <div className="col-sm-3" key={item.id}>
                        <GameItem data={item.fields} />
                    </div>
                ))}
            </div>
        )
    }
}
