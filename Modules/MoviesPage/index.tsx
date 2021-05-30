import React from 'react'

import { Container } from 'Components/Container'
import { MovieCard } from 'Components/MovieCard'

import { MoviesType } from './types'
import { StyledMoviesPage } from './styles'

export interface MoviesPageProps {
  movies: MoviesType[]
}

const MoviesPage = ({ movies }: MoviesPageProps) => {
  return (
    <Container>
      <StyledMoviesPage>
        {movies.map(game => {
          return (
            <MovieCard
              key={game.id}
              title={game.properties.title_en.title?.[0].plain_text}
              id={game.id}
              realise={game.properties.date_release?.date?.start}
              cover={game.properties.cover.files?.[0]?.name}
              type={game.properties.type.select?.name}
            />
          )
        })}
      </StyledMoviesPage>
    </Container>
  )
}

export { MoviesPage }
