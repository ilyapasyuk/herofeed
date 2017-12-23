import GamesList from './GamesList.jsx'

const props = [
    'list'
];

const ReactGamesList = (reactDirective) => reactDirective(GamesList, props);
ReactGamesList.$inject = ['reactDirective'];

export default ReactGamesList;
