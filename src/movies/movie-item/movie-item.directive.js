import MovieItem from './MovieItem.jsx'

const props = [
    'list'
];

const ReactMovieItem = (reactDirective) => reactDirective(MovieItem, props);
ReactMovieItem.$inject = ['reactDirective'];

export default ReactMovieItem;
