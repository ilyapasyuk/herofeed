import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MovieList from '../../Containers/Movies/MovieList';
import MoviePage from '../../Containers/Movies/MoviePage';
import GameList from '../../Containers/Games/GameList';
import './style.scss';

const Main = () => (
    <main className="container">
        <Switch>
            <Route
                exact
                path="/"
                component={GameList}
            />
            <Route
                exact
                path="/games"
                component={GameList}
            />
            <Route
                path="/movies"
                component={MovieList}
            />
            <Route
                path="/movie/:id"
                component={MoviePage}
            />
        </Switch>
    </main>
);

export default Main;
