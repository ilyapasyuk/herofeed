import styled from 'styled-components'
import { variables } from 'Components/styles/variables'

const StyledCard = styled.div`
  display: block;
  padding: 0;
  background: white;
  position: relative;
  border-radius: ${variables.baseSize}px;
  border: 1px solid #e6e6e6;
  width: 100%;
  overflow: hidden;
`

const StyledTitle = styled.h4`
  padding-top: ${variables.baseSize * 3}px;
  padding-bottom: ${variables.baseSize * 3}px;
  padding-left: ${variables.baseSize * 4}px;
  padding-right: ${variables.baseSize * 4}px;
  font-size: 14px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 1px solid #e6e6e6;
`

const StyledRealise = styled.div`
  padding-top: ${variables.baseSize * 3}px;
  padding-bottom: ${variables.baseSize * 3}px;
  padding-left: ${variables.baseSize * 4}px;
  padding-right: ${variables.baseSize * 4}px;
  font-size: 12px;
  opacity: 0.4;
`

const StyledPlatforms = styled.div`
  padding-top: ${variables.baseSize * 3}px;
  padding-bottom: ${variables.baseSize * 3}px;
  padding-left: ${variables.baseSize * 4}px;
  padding-right: ${variables.baseSize * 4}px;
  font-size: 12px;
  display: flex;
  overflow-x: auto;
`

const StyledPlatform = styled.div`
  background-color: ${variables.completeLighter};
  border-radius: ${variables.baseSize}px;
  white-space: nowrap;
  padding-top: ${variables.baseSize}px;
  padding-bottom: ${variables.baseSize}px;
  padding-left: ${variables.baseSize * 2}px;
  padding-right: ${variables.baseSize * 2}px;
  margin-right: ${variables.baseSize * 2}px;
`
export { StyledCard, StyledRealise, StyledTitle, StyledPlatform, StyledPlatforms }
