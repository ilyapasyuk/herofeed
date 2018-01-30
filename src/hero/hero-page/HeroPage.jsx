import React, {Component} from 'react';
import './hero-page.scss';

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
