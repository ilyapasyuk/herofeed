import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledHeader = styled.div`
    padding: 0;
    background: #262734;
    height: 50px;
    box-shadow: 0 1px 15px 1px rgba(81, 77, 92, 0.5);
    position: fixed;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: flex-start;
`

const StyledItem = styled(NavLink)`
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
export { StyledHeader, StyledItem }
