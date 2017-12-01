import MovieList from './MovieList.jsx'

const props = [
    'list'
];

const ReactMovieList = (reactDirective) => reactDirective(MovieList, props);
ReactMovieList.$inject = ['reactDirective'];

export default ReactMovieList;
