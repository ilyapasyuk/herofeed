/* @ngInject */
export default function($http) {

    return {
        getList() {
            const movieListUrl = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&sort%5B0%5D%5Bfield%5D=date_realise&sort%5B0%5D%5Bdirection%5D=desc';

            return $http.get(movieListUrl).then((response) => {
                return Object.values(response.data.records);
            });
        },
        getMovie(idMovie) {
            const idMovieUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/movies?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idMovie}"`;

            return $http.get(idMovieUrl).then((response) => response.data.records[0].fields);
        }
    };
}
