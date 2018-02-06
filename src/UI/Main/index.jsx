import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MovieList from '../../movies/movie-list/MovieList';
import GameList from '../../games/games-list/GamesList';
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
        </Switch>
    </main>
);

export default Main;
