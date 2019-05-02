import API from './Api'

export async function getList() {
    const games = await API('games')
        .select({ view: 'Grid view', maxRecords: 100 })
        .firstPage()

    return games.map(game => {
        const { fields } = game
        return {
            id: game.id,
            platforms: fields.platforms,
            title: fields.title_en,
            realise: fields.date_relise,
        }
    })
}
