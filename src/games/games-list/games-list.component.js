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
function GamesListController(Games) {
    const vm = this;
    vm.filterData = (query = '') => {
        vm.filteredList = Games.filter(vm.list, query);
    };

    vm.$onInit = () => {
        vm.query = '';
        vm.filteredList = Games.filter(vm.list, vm.query);
    };
}
