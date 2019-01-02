import React from 'react'
import Wizard from 'react-onboarding'
import './style.scss'
import Menu from '../../UI/Menu'
import Main from '../../UI/Main'

const rule = [
    {
        elementId: 'Menu',
        title: 'Main menu',
        description: 'Basic navigation',
    },
    {
        elementId: 'MovieFilter',
        title: 'Filter',
        description: 'Controls for sort types',
    },
    {
        elementId: 'LoadMore',
        title: 'Load more',
        description: 'Controls for load more movies',
    },
]

function App() {
    return (
        <div>
            <Wizard isShow rule={rule} />
            <Menu />
            <Main />
        </div>
    )
}

export default App
