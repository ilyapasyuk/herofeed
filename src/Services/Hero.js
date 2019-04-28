import axios from 'axios'

export default class HeroService {
    async getHero(idHero) {
        const idUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/characters?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idHero}"`
        const heroData = await axios.get(idUrl)

        return heroData.data.records[0].fields
    }
}
