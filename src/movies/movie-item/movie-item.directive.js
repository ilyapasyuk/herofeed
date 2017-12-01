import MovieItem from './MovieItem.jsx';

const props = [
    'item'
];

const ReactMovieItem = (reactDirective) => reactDirective(MovieItem, props);
ReactMovieItem.$inject = ['reactDirective'];

export default ReactMovieItem;
