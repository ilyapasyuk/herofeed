import axios from 'axios'
import Qs from 'qs'

const defaultParams = {
    api_key: 'keyFR1R9B9wqDZeOz',
    pageSize: 12,
}

const project = 'app0a8OYcOZAv6uCv'

class Api {
    static getBaseUrl(baseName) {
        return `https://api.airtable.com/v0/${project}/${baseName}`
    }

    get(baseName, query) {
        const params = {
            ...defaultParams,
            ...query,
        }

        return axios({
            method: 'get',
            url: Api.getBaseUrl(baseName),
            params,
            paramsSerializer: () => Qs.stringify(params, { arrayFormat: 'brackets' }),
        }).then((response) => response.data.records)
    }
}

export default new Api()
