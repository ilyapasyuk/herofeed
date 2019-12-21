import React from 'react'
import {Card, Title, Realise, Platform, Platforms} from './style'

interface GameCard {
    title: string,
    realise: string,
    platforms: string[]
}

const GameCard = (props: GameCard) => (
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

export default GameCard
