import React, {Component, PropTypes} from 'react';
import './game.scss';

export default class GameItem extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.data.type;
        this.title = props.data.title_en;
        this.date_relise = props.data.date_relise;
        this.platforms = props.data.platforms || null;
    }

    render() {
        return (
            <div className="game">
                <div className="game__title">
                    {this.title}
                </div>
                <div className="game__realise">
                    {this.date_relise}
                </div>
                <div className="game__platforms">
                    {this.platforms.map((platform) => {
                        return <span className="game__platform"
                                     key={platform}>
                    {platform}
                    </span>
                    })}
                </div>
            </div>
        );
    }
}
