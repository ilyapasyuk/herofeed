import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.pages = [
            {
                state: 'games',
                name: 'Игры',
                icon: 'games'
            }, {
                state: 'movies',
                name: 'Кино',
                icon: 'local-movies'
            }
        ];
    }

    render() {
        return (
            <div className="menu">
                <div className="menu__brand">
                    Herofeed
                </div>

                <div className="menu__items">
                    {this.pages.map((page) => {
                        return <Link to={page.state}
                                     className="menu__item"
                                  key={page.state}>
                            <i className={ `mi mi-${page.icon}` }></i>
                            { page.name}
                        </Link>
                    })}
                </div>
            </div>

        );
    }
}
