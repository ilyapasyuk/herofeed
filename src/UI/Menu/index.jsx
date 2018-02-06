import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.pages = [
            {
                state: '/games',
                name: 'Игры',
                icon: 'games',
            }, {
                state: '/movies',
                name: 'Кино',
                icon: 'local-movies',
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
