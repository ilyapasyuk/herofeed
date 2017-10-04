/* @ngInject */
export default function($http) {

    return {
        getList() {
            const params = {
                api_key: 'keyFR1R9B9wqDZeOz',
                sort: [{
                    field: 'date',
                    direction: 'desc'
                }]
            };

            const newsListUrl = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/news';

            return $http({
                url: newsListUrl,
                method: 'GET',
                params,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then((response) => {
                return Object.values(response.data.records);
            });
        },
        getPost(idPost) {
            const idPostUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/news?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idPost}"`;

            return $http.get(idPostUrl).then((response) => response.data.records[0].fields);
        }
    };
}
