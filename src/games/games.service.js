/* @ngInject */
export default function($http) {
    const SOURCE = 'https://api.airtable.com/v0/app0a8OYcOZAv6uCv/games?api_key=keyFR1R9B9wqDZeOz&sort%5B0%5D%5Bfield%5D=date_relise&sort%5B0%5D%5Bdirection%5D=desc';

    return {
        getList() {
            return $http.get(SOURCE).then((response) => {
                return Object.values(response.data);
            });
        }
    };
}
