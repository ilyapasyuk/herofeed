import React, {Component} from 'react';
import GameItem from '../game-item/GameItem.jsx';
import './games-list.scss';
import GamesService from '../games.service';
const Games = new GamesService();


export default class GameList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
        console.log(this);
    }

    componentDidMount() {
        Games.getList()
            .then((response) => {
                this.setState({
                    items: response
                });
            })
    }

    render() {
        return (
            <div className="games-list">
                {this.state.items.map((item) => {
                    return <div className="col-sm-3"
                                key={item.id}>
                        <GameItem data={item.fields}>
                        </GameItem>
                    </div>
                })}
            </div>
        );
    }
}

