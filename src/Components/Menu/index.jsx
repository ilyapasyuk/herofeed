import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Logo from './logo.png'

import PAGES from 'Constants/menu'

const useStyles = createUseStyles({
    base: {
        padding: 0,
        background: '#262734',
        height: 70,
        backfaceVisibility: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0px 1px 15px 1px rgba(81, 77, 92, 0.5)',
        position: 'fixed',
        width: '100%',
        zIndex: 3,
    },
    container: {
        display: 'flex',
        height: '100%',
    },
    logo: {
        height: '100%',
    },
    items: {
        display: 'flex',
        height: '100%',
    },
    item: {
        color: '#6c6e86',
        textDecoration: 'none',
        padding: '0px 20px',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: '#fff',
        },
        '&:active': {
            color: '#fff',
        },
    },
})

function Menu() {
    const classes = useStyles()

    return (
        <div className={classes.base}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    <img src={Logo} alt="Herofeed" className={classes.logo} />
                </Link>

                <div className={classes.items}>
                    {PAGES.map(page => (
                        <NavLink
                            to={page.state}
                            className={classes.item}
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
