import axios from 'axios';

/**
 * HeroService stores the methods for obtaining data about the superheros
 * @example
 * const Hero = new HeroService();
 */
export default class HeroService {
    /**
     * @return {Object} with hero information.
     */
    getHero(idHero) {
        /**
         * @type {string}
         */
        const idUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/characters?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idHero}"`;
        return axios.get(idUrl).then((response) => response.data.records[0].fields);
    }
}
