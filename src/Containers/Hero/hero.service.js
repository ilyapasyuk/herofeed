import axios from 'axios';

export default class HeroService {
    getHero(idHero) {
        const idUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/characters?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idHero}"`;
        return axios.get(idUrl).then((response) => response.data.records[0].fields);
    }
}
