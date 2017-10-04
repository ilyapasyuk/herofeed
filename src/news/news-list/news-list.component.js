import angular from 'angular';
import template from './news-list.html';
import './news-list.scss';

export default {
    bindings: {
        list: '<'
    },
    controller: NewsListController,
    controllerAs: 'newsList',
    template
};


/* @ngInject */
function NewsListController() {
    const vm = this;

    vm.$onInit = () => {
        vm.data = angular.copy(vm.list);
    };
}
