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
function MoviesListController() {
    const vm = this;
}
