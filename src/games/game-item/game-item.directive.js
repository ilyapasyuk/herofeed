import GameItem from './GameItem.jsx';

const props = [
    'list'
];

const ReactGameItem = (reactDirective) => reactDirective(GameItem, props);
ReactGameItem.$inject = ['reactDirective'];

export default ReactGameItem;
