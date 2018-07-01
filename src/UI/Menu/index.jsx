import React from 'react';
import {Link} from 'react-router-dom';
import injectSheet from 'react-jss';
import variables from '../styles/variables';

const styles = {
    Menu: {
        display: 'flex',
        alignItems: 'stretch',
        height: 50,
        margin: 0,
        backgroundColor: variables.primaryColor,
        padding: {
            left: variables.inner.paddingLeft,
            right: variables.inner.paddingRight,
        },
    },
    items: {
        display: 'flex',
        alignItems: 'stretch',
        listStyle: 'none',
    },
    item: {
        margin: {
            top: 0,
            right: variables.baseSize * 3,
            bottom: 0,
            left: variables.baseSize * 3,
        },
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        transition: 'all .2s ease-in-out',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        opacity: '.8',
        fontSize: variables.baseSize * 4,
        outline: 'none',

        '&:hover': {
            opacity: 1,
        },
    },
    brand: {
        fontSize: variables.baseSize * 5,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textTransform: 'uppercase',
        marginRight: variables.baseSize * 20,
    },
};

const pages = [
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

const Menu = ({classes}) => (
    <div className={classes.Menu}>
        <div className={classes.brand}>
            Herofeed
        </div>

        <div className={classes.items}>
            {pages.map((page) => (
                <Link
                    to={page.state}
                    className={classes.item}
                    key={page.state}
                >
                    {page.name}
                </Link>
            ))}
        </div>
    </div>
);

export default injectSheet(styles)(Menu);
