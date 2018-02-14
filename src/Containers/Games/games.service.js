import axios from 'axios';

/**
 * @type {string}
*/
const SOURCE = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/Games?api_key=keyFR1R9B9wqDZeOz&sort%5B0%5D%5Bfield%5D=date_relise&sort%5B0%5D%5Bdirection%5D=desc';

/**
 * GamesService stores the methods for obtaining data about the games
 * @example
 * const Games = new GamesService();
 */
export default class GamesService {

    /**
     * @return {Object} with games list.
     */
    getList() {
        return axios.get(SOURCE).then((response) => {
            return Object.values(response.data.records);
        });
    }
}
