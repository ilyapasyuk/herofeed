import Airtable from 'airtable'

const params = {
    apiKey: 'keyFR1R9B9wqDZeOz',
    base: 'app0a8OYcOZAv6uCv',


}

export default new Airtable({ apiKey: params.apiKey }).base(params.base)
