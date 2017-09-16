import template from './games-list.html';
import './games-list.scss';

export default {
    bindings: {
        list: '<'
    },
    controller: GamesListController,
    controllerAs: 'gamesList',
    template
};


/* @ngInject */
function GamesListController() {
    const vm = this;
}
