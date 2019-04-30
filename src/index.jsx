import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'
import App from './Components/App'
import './Components/styles/core.scss'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <Component />
            </HashRouter>
        </AppContainer>,
        document.getElementById('app'),
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./Components/App/index.jsx', () => {
        const App = require('./Components/App/index.jsx').default
        render(App)
    })
}
