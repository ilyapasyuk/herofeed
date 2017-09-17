/* @ngInject */
export default ($http) => {
    return {
        getHero(idHero) {
            const idUrl = `https://api.airtable.com/v0/app0a8OYcOZAv6uCv/characters?api_key=keyFR1R9B9wqDZeOz&filterByFormula=id="${idHero}"`;

            return $http.get(idUrl).then((response) => {
                return Object.values(response.data);
            });
        }
    };
};
