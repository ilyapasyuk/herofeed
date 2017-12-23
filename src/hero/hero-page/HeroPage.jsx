import React, {Component, PropTypes} from 'react';
import './hero-page.scss';

export default class HeroPage extends React.Component {
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
