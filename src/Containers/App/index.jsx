import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import Wizard from 'react-onboarding'
import './style.scss'
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
            {/*<Wizard rule={rule} />*/}
            <Suspense fallback={<div>Loading...</div>}>
                <HashRouter>
                    <Main />
                </HashRouter>
            </Suspense>
        </div>
    )
}

export default App
