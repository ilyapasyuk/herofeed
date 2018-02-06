import React, {Component} from 'react';
import './style.scss';

export default class HeroPage extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <div className="hero-page container">
                { this.data.title_ru }
            </div>
        );
    }
}
