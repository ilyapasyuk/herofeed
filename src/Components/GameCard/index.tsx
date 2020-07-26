import React from 'react'
import { Card, Title, Realise, Platform, Platforms } from './style'

interface GameCardProps {
    title: string
    realise: string
    platforms: string[]
}

const GameCard = ({ title, platforms, realise }: GameCardProps) => (
    <Card>
        <Title>{title}</Title>
        <Realise>{realise}</Realise>
        <Platforms>
            {platforms.map(platform => (
                <Platform key={platform}>{platform}</Platform>
            ))}
        </Platforms>
    </Card>
)

export default GameCard
