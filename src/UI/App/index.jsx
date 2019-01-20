import React, { Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Menu from '../Menu'
import './style.scss'

const MovieList = React.lazy(() => import('../../Containers/Movies/MovieList'))
const MoviePage = React.lazy(() => import('../../Containers/Movies/MoviePage'))
const GameList = React.lazy(() => import('../../Containers/Games/GameList'))

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HashRouter>
                <main className="container">
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={MovieList} />
                        <Route exact path="/movies" component={MovieList} />
                        <Route path="/games" component={GameList} />
                        <Route path="/movie/:id" component={MoviePage} />
                    </Switch>
                </main>
            </HashRouter>
        </Suspense>
    )
}

export default App
