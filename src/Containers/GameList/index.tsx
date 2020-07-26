import React from 'react'
import { Row, Col } from 'react-grid-system'

import GameCard from 'Components/GameCard'
import { useGames } from 'Hooks/useGames'

export default function GameList() {
    const { games } = useGames()

    return (
        <Row>
            {games.map(game => (
                <Col sm={3} key={game.id}>
                    <GameCard
                        realise={game.realise}
                        title={game.title}
                        platforms={game.platforms}
                    />
                </Col>
            ))}
        </Row>
    )
}
