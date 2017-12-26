import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App/App.jsx'
import { HashRouter } from 'react-router-dom';
import './core/core.scss';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('app')
);
