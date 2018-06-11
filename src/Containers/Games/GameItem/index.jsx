import React, {Component} from 'react';
import './style.scss';

export default class GameItem extends Component {
    constructor(props) {
        super(props);
        this.type = props.data.type;
        this.title = props.data.title_en;
        this.date_relise = props.data.date_relise;
        this.platforms = props.data.platforms || null;
    }

    render() {
        return (
            <div className="Game">
                <div className="Game__title">
                    {this.title}
                </div>
                <div className="Game__realise">
                    {this.date_relise}
                </div>
                <div className="Game__platforms">
                    {this.platforms.map((platform) => (
                        <span
                            className="Game__platform"
                            key={platform}
                        >
                            {platform}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}
