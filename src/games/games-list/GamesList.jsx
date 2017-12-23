import React, {Component} from 'react';
import GameItem from '../game-item/GameItem.jsx';
import './games-list.scss';

export default class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.list = this.props.list;
    }

    render() {
        return (
            <div className="games-list container">
                {this.list.map((item) => {
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

