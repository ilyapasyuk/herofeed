import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
// import MovieList from '../../Containers/Movies/MovieList'
const MovieList = React.lazy(() => import('../../Containers/Movies/MovieList'))
import MoviePage from '../../Containers/Movies/MoviePage'
import GameList from '../../Containers/Games/GameList'
import './style.scss'

const Main = () => (
    <main className="container">
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={MovieList} />
            </Suspense>
            <Route exact path="/movies" component={MovieList} />
            <Route path="/games" component={GameList} />
            <Route path="/movie/:id" component={MoviePage} />
        </Switch>
    </main>
)

export default Main
