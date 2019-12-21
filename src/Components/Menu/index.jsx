import React from 'react'
import PAGES from 'Constants/menu'

import { StyledHeader, StyledItem } from './style'

const Header = () => (
    <StyledHeader>
        {PAGES.map(page => (
            <StyledItem to={page.state} activeClassName="Header__item_active" key={page.state}>
                {page.name}
            </StyledItem>
        ))}
    </StyledHeader>
)

export default Header
