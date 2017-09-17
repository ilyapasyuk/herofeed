import template from './movie-page.html';
import './movie-page.scss';

export default {
    bindings: {
        data: '<'
    },
    controller: MoviePageController,
    controllerAs: 'moviePage',
    template
};


/* @ngInject */
function MoviePageController() {
    const vm = this;
}
