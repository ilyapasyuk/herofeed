import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from './logo.png'

import PAGES from 'Constants/menu'

import './styles.scss'

function Menu() {
    return (
        <div className="Menu">
            <div className="Menu__container container">
                <Link to="/" className="Menu__logo">
                    <img src={Logo} alt="Herofeed" />
                </Link>

                <div className="Menu__items">
                    {PAGES.map(page => (
                        <NavLink
                            to={page.state}
                            className="Menu__item"
                            activeClassName="Menu__item_active"
                            key={page.state}
                        >
                            {page.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
