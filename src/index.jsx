import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './Components/App'
import './Components/styles/core.scss'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('app'),
)
