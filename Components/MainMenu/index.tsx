import { Container } from 'Components/Container'
import Link from 'next/link'
import { StyledHeader } from './style'

const MainMenu = () => (
  <StyledHeader>
    <Container>
      <Link href="/movies">Movies</Link>
      <Link href="/games">Games</Link>
    </Container>
  </StyledHeader>
)

export { MainMenu }
