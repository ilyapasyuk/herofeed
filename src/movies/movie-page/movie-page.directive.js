import MoviePage from './MoviePage.jsx'

const props = [
    'data'
];

const ReactMoviePage = (reactDirective) => reactDirective(MoviePage, props);
ReactMoviePage.$inject = ['reactDirective'];

export default ReactMoviePage;
