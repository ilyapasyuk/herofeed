import React from 'react'
import dayjs from 'dayjs'
import { StyledCard, StyledTitle, StyledRealise, StyledPlatform, StyledPlatforms } from './style'

import { DateType, MultiSelectType } from 'Modules/GamesPage/types'

interface GameCardProps {
  title: string
  realise: DateType | undefined
  platforms: MultiSelect[]
}

const GameCard = ({ title, platforms, realise }: GameCardProps) => {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      {realise?.start && <StyledRealise>{dayjs(realise.start).format('DD.MM.YYYY')}</StyledRealise>}
      <StyledPlatforms>
        {platforms.map(platform => (
          <StyledPlatform key={platform.id}>{platform.name}</StyledPlatform>
        ))}
      </StyledPlatforms>
    </StyledCard>
  )
}

export default GameCard
