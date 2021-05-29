import React from 'react'
import { StyledCard, StyledTitle, StyledRealise, StyledPlatform, StyledPlatforms } from './style'

import { MultiSelect } from 'Modules/GamesPage/types'

interface GameCardProps {
  title: string
  realise: number | undefined
  platforms: MultiSelect[]
}

const GameCard = ({ title, platforms, realise }: GameCardProps) => {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledRealise>{realise}</StyledRealise>
      <StyledPlatforms>
        {platforms.map(platform => (
          <StyledPlatform key={platform.id}>{platform.name}</StyledPlatform>
        ))}
      </StyledPlatforms>
    </StyledCard>
  )
}

export default GameCard
