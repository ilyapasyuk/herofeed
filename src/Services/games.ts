import API from 'Services/api'
import { Records } from 'airtable'

interface GameResponseDto {
    platforms: string[]
    title_en: string
    date_relise: string
}

export type Game = {
    id: string
    platforms: string[]
    title: string
    realise: string
}

const getList = async (): Promise<Game[]> => {
    try {
        // @ts-ignore
        const games: Records<GameResponseDto> = await API('games')
            .select({ view: 'Grid view', maxRecords: 100 })
            .firstPage()

        return games.map(game => {
            return {
                id: game.id,
                platforms: game.fields.platforms,
                title: game.fields.title_en,
                realise: game.fields.date_relise,
            }
        })
    } catch (e) {
        return Promise.reject(new Error(e))
    }
}

export { getList }
