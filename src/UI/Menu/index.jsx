import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.pages = [
            {
                state: '/movies',
                name: 'Кино',
                icon: 'local-Movies',
            }, {
                state: '/games',
                name: 'Игры',
                icon: 'Games',
            },
        ];
    }

    render() {
        return (
            <div className="Menu">
                <div className="Menu__brand">
                    Herofeed
                </div>

                <div className="Menu__items">
                    {this.pages.map((page) => (
                        <Link
                            to={page.state}
                            className="Menu__item"
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
