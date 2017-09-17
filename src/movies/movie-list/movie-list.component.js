import template from './movie-list.html';
import './movie-list.scss';

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
}
