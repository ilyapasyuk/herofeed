import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './core/App/App.jsx';
import {HashRouter} from 'react-router-dom';
import configureStore from './store/configureStore';
import './core/core.scss';

const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('app')
);
