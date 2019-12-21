import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { Container } from 'react-grid-system'
import styled from 'styled-components'

// Components
import Menu from 'Components/Menu'
import SplashScreen from 'Components/SplashScreen'

// Constants
import ROUTES from 'Constants/routes'

const MovieList = React.lazy(() => import('../../Containers/MoviesList'))
const GameList = React.lazy(() => import('../../Containers/GameList'))

const ContainerMain = styled.main`
    padding-top: 120px;
`

function App() {
    return (
        <Suspense fallback={<SplashScreen />}>
            <Menu />
            <ContainerMain as={Container}>
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path={ROUTES.MOVIES.LIST} component={MovieList} />
                    <Route path={ROUTES.GAMES.LIST} component={GameList} />
                </Switch>
            </ContainerMain>
        </Suspense>
    )
}

export default hot(App)
