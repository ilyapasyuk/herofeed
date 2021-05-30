import React from 'react'
import Dayjs from 'dayjs'

import {
  StyledCard,
  StyledPoster,
  StyledRealise,
  StyledType,
  StyledTitle,
} from 'Components/MovieCard/style'

interface MovieCardProps {
  type: string | undefined
  id: string
  title?: string | undefined
  cover: string | undefined
  realise: string | undefined
}

const MovieCard = ({ type, cover, id, realise, title }: MovieCardProps) => {
  return (
    <StyledCard>
      <StyledPoster>
        {type && <StyledType type={type}>{type}</StyledType>}
        <StyledRealise>{Dayjs(realise).format('DD.MM.YYYY')}</StyledRealise>
        {cover && <img src={cover} alt={title} />}
      </StyledPoster>
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledCard>
  )
}

export { MovieCard }
