import React from 'react'
import styled from 'styled-components'

import variables from '../styles/variables'

const Card = styled("div")`
    display: block;
    padding: 0;
    background: white;
    position: relative;
    border-radius: ${variables.baseSize}px;
    margin-bottom: 20px;
    border: 1px solid #e6e6e6;
    width: 100%;
    overflow: hidden;
`

const Title = styled("h4")`
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

const Realise = styled("div")`
    padding-top: ${variables.baseSize * 3}px;
    padding-bottom: ${variables.baseSize * 3}px;
    padding-left: ${variables.baseSize * 4}px;
    padding-right: ${variables.baseSize * 4}px;
    font-size: 12px;
    opacity: 0.4;
`

const Platforms = styled("div")`
    padding-top: ${variables.baseSize * 3}px;
    padding-bottom: ${variables.baseSize * 3}px;
    padding-left: ${variables.baseSize * 4}px;
    padding-right: ${variables.baseSize * 4}px;
    font-size: 12px;
    display: flex;
    overflow-x: auto;
`

const Platform = styled("div")`
    background-color: ${variables.completeLighter};
    border-radius: ${variables.baseSize}px;
    white-space: nowrap;
    padding-top: ${variables.baseSize}px;
    padding-bottom: ${variables.baseSize}px;
    padding-left: ${variables.baseSize * 2}px;
    padding-right: ${variables.baseSize * 2}px;
    margin-right: ${variables.baseSize * 2}px;
`
interface GameCard {
    title: string,
    realise: string,
    platforms: string[]
}
const GameCard = (props: GameCard) => {
    return (
        <Card>
            <Title>{props.title}</Title>
            <Realise>{props.realise}</Realise>
            <Platforms>
                {props.platforms.map(platform => (
                    <Platform key={platform}>{platform}</Platform>
                ))}
            </Platforms>
        </Card>
    )
}

export default GameCard
