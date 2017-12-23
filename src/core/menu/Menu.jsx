import React, {Component, PropTypes} from 'react';
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

    handleClick(id) {
        return window.location.href = `#!/${id}`
    }

    render() {
        return (
            <div className="menu">
                <div className="menu__brand">
                    Herofeed
                </div>

                <div className="menu__items">
                    {this.pages.map((page) => {
                        return <a className="menu__item"
                                  onClick={() => this.handleClick(page.state)}
                                  key={page.state}>
                            <i className={ `mi mi-${page.icon}` }></i>
                            { page.name}
                        </a>
                    })}
                </div>
            </div>

        );
    }
}
