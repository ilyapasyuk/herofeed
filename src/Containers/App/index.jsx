import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import './style.scss'
import Main from '../../UI/Main'

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <HashRouter>
                    <Main />
                </HashRouter>
            </Suspense>
        </div>
    )
}

export default App
