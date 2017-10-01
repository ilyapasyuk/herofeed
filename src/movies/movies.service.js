/* @ngInject */
export default function($http) {

    return {
        getList() {
            const params = {
                api_key: 'keyFR1R9B9wqDZeOz',
                sort: [{
                    field: 'date_realise',
                    direction: 'desc'
                }]
            };

            const movieListUrl = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies';

            return $http({
                url: movieListUrl,
                method: 'GET',
                params,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then((response) => {
                return Object.values(response.data.records);
            });
        },
        getMovie(idMovie) {
            const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`;

            return $http.get(idMovieUrl).then((response) => response.data.records[0].fields);
        }
    };
}
