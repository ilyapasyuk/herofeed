import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// Components
import Menu from 'Components/Menu'
import SplashScreen from 'Components/SplashScreen'

// Constants
import ROUTES from 'Constants/routes'
import './style.scss'

const MovieList = React.lazy(() => import('../../Containers/MoviesList'))
const MoviePage = React.lazy(() => import('../../Containers/MoviePage'))
const GameList = React.lazy(() => import('../../Containers/GameList'))

const useStyles = createUseStyles({
    container: {
        paddingTop: 120,
    },
})

function App() {
    const styles = useStyles()
    return (
        <Suspense fallback={<SplashScreen />}>
            <Menu />
            <main className={styles.container}>
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path={ROUTES.MOVIES.LIST} component={MovieList} />
                    <Route path={ROUTES.MOVIES.ITEM} component={MoviePage} />
                    <Route path={ROUTES.GAMES.LIST} component={GameList} />
                </Switch>
            </main>
        </Suspense>
    )
}

export default App
