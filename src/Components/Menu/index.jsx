import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import PAGES from 'Constants/menu'
import logoImage from './logo.png'

const Menu = styled.div`
    padding: 0;
    background: #262734;
    height: 70px;
    backface-visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 1px 15px 1px rgba(81, 77, 92, 0.5);
    position: fixed;
    width: 100%;
    z-index: 3;
    display: flex;
`

const Logo = styled(Link)`
    display: inline-flex;
    flex: 0;

    img {
        height: 100%;
        display: flex;
    }
`

const MenuItem = styled(NavLink)`
    color: #6c6e86;
    text-decoration: none;
    padding: 0 20px;
    height: 100%;
    align-items: center;
    display: inline-flex;
    transition: all 0.3s ease;
    &:hover {
        color: #fff;
    }

    &:active {
        color: #fff;
    }
`

export default () => (
    <Menu>
        <Logo to="/">
            <img src={logoImage} alt="Herofeed" />
        </Logo>

        {PAGES.map(page => (
            <MenuItem to={page.state} activeClassName="Menu__item_active" key={page.state}>
                {page.name}
            </MenuItem>
        ))}
    </Menu>
)
