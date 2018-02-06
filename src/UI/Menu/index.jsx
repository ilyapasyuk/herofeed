import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.pages = [
            {
                state: '/Games',
                name: 'Игры',
                icon: 'Games',
            }, {
                state: '/Movies',
                name: 'Кино',
                icon: 'local-Movies',
            },
        ];
    }

    render() {
        return (
            <div className="menu">
                <div className="menu__brand">
                    Herofeed
                </div>

                <div className="menu__items">
                    {this.pages.map((page) => (
                        <Link
                            to={page.state}
                            className="menu__item"
                            key={page.state}
                        >
                            <i className={`mi mi-${page.icon}`} />
                            { page.name}
                        </Link>
                    ))}
                </div>
            </div>

        );
    }
}
