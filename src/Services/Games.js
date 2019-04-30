import axios from 'axios'

const SOURCE =
    'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/Games?api_key=keyFR1R9B9wqDZeOz&sort%5B0%5D%5Bfield%5D=date_relise&sort%5B0%5D%5Bdirection%5D=desc'

class GamesService {
    async getList() {
        const games = await axios.get(SOURCE)
        return games.data.records.map(game => {
            return {
                platforms: game.fields.platforms,
                title: game.fields.title_en,
                realise: game.fields.date_relise,
                id: game.id,
            }
        })
    }
}

export default new GamesService()
