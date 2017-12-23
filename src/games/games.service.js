import axios from 'axios';

const SOURCE = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/games?api_key=keyFR1R9B9wqDZeOz&sort%5B0%5D%5Bfield%5D=date_relise&sort%5B0%5D%5Bdirection%5D=desc';

export default class GamesService {
    getList() {
        return axios.get(SOURCE).then((response) => {
            return Object.values(response.data.records);
        });
    }
}
