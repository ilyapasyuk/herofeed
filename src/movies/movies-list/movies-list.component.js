import template from './movies-list.html';
import './movies-list.scss';

export default {
    bindings: {
        list: '<'
    },
    controller: MoviesListController,
    controllerAs: 'moviesList',
    template
};


/* @ngInject */
function MoviesListController(Movies) {
    const vm = this;
    vm.filterData = (query = '') => {
        vm.filteredList = Movies.filter(vm.list, query);
    };

    vm.$onInit = () => {
        vm.query = '';
        vm.filteredList = Movies.filter(vm.list, vm.query);
    };
}
