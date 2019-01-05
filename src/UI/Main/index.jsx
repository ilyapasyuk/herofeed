import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../Menu'

const MovieList = React.lazy(() => import('../../Containers/Movies/MovieList'))
const MoviePage = React.lazy(() => import('../../Containers/Movies/MoviePage'))
const GameList = React.lazy(() => import('../../Containers/Games/GameList'))
import './style.scss'

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
