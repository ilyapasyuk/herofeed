import React from 'react'
import dayjs from 'dayjs'
import { StyledCard, StyledTitle, StyledRealise, StyledPlatform, StyledPlatforms } from './style'

import { DateType, MultiSelectType } from 'helpers/notionTypes'

interface GameCardProps {
  title: string
  realise: DateType | undefined
  platforms: MultiSelectType[]
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
