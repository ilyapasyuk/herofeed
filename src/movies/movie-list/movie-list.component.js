import angular from 'angular';
import template from './movie-list.html';
import './movie-list.scss';

import Moment from 'moment';

export default {
    bindings: {
        list: '<'
    },
    controller: MovieListController,
    controllerAs: 'movieList',
    template
};


/* @ngInject */
function MovieListController() {
    const vm = this;

    vm.$onInit = () => {
        vm.data = angular.copy(vm.list);
        vm.thisYear = Moment().year();
        vm.thisMonth = Moment().format('MMMM');
    };

    vm.getThisYearMovies = () => {
        vm.activateFilters = true;
        const thisYear = Moment().startOf('year').format('YYYY');
        vm.data = vm.list.filter((movie) => movie.fields.date_realise.slice(0, -6) === thisYear);
    };

    vm.getThisMonthMovies = () => {
        vm.activateFilters = true;
        const thisMonth = Moment().startOf('month').format('YYYY-MM');
        vm.data = vm.list.filter((movie) => movie.fields.date_realise.slice(0, -3) === thisMonth);
    };

    vm.resetFilters = () => {
        vm.activateFilters = false;
        vm.data = vm.list;
    };
}
