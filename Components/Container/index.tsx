import React from 'react'

import { StyledContainer } from './styles'

interface ContainerProps {
  children: React.ReactChildren | React.ReactChildren[] | React.ReactChild | React.ReactChild[]
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>
}

export { Container }
