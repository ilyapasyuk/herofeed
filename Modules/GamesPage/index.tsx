import { Container } from 'Components/Container'
import React from 'react'

import GameCard from 'Components/GameCard'

import { GameType } from './types'
import { StyledGamesPage } from './styles'

export interface GamesPageProps {
  games: GameType[]
}

const GamesPage = ({ games }: GamesPageProps) => {
  return (
    <Container>
      <StyledGamesPage>
        {games.map(game => (
          <GameCard
            key={game.id}
            title={game.properties.title.title[0].plain_text}
            realise={game.properties.date_release?.date}
            platforms={game.properties.platforms.multi_select}
          />
        ))}
      </StyledGamesPage>
    </Container>
  )
}

export { GamesPage }
