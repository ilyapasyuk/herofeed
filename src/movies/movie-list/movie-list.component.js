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
    };

    vm.getThisYearMovies = () => {
        const thisYear = Moment().startOf('year').format('YYYY');
        vm.data = vm.list.filter((movie) => movie.fields.date_realise.slice(0, -6) === thisYear);
    };

    vm.getThisMonthMovies = () => {
        const thisMonth = Moment().startOf('month').format('YYYY-MM');
        vm.data = vm.list.filter((movie) => movie.fields.date_realise.slice(0, -3) === thisMonth);
    };
}
