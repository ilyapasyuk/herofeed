import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
const MovieList = React.lazy(() => import('../../Containers/Movies/MovieList'))
import MoviePage from '../../Containers/Movies/MoviePage'
import GameList from '../../Containers/Games/GameList'
import './style.scss'
import Menu from '../Menu'

const Main = () => (
    <main className="container">
        <Menu />
        <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movies" component={MovieList} />
            <Route path="/games" component={GameList} />
            <Route path="/movie/:id" component={MoviePage} />
        </Switch>
    </main>
)

export default Main
