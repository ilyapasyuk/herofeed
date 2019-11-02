import API from './Api'

export const GAME_FIELD = {
    ID: 'id',
    PLATFORMS: 'platforms',
    TITLE_EN: 'title_en',
    DATE_RELISE: 'DATE_RELISE',
}

export async function getList() {
    const games = await API('games')
        .select({ view: 'Grid view', maxRecords: 100 })
        .firstPage()

    return games.map((game: any) => {
        const { fields } = game

        return {
            id: game[GAME_FIELD.ID],
            platforms: fields[GAME_FIELD.PLATFORMS],
            title: fields[GAME_FIELD.TITLE_EN],
            realise: fields[GAME_FIELD.DATE_RELISE],
        }
    })
}
