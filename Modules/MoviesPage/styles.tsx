import styled from 'styled-components'

import { MEDIA_QUERIES } from 'helpers/mediaQueries'

const StyledMoviesPage = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (min-width: ${MEDIA_QUERIES.EXTRA_SMALL_DEVICES}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: '. . .';
  }

  @media screen and (min-width: ${MEDIA_QUERIES.MEDIUM_DEVICES}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    grid-template-areas: '. . . . . .';
  }
`

export { StyledMoviesPage }
