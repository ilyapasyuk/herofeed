import { useEffect, useState } from 'react'
import { Game, getList } from 'Services/games'

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])

    const getGames = async () => {
        const result = await getList()
        setGames(result)
    }

    useEffect(() => {
        getGames()
    }, [])

    return { games }
}

export { useGames }
