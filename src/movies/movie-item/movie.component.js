import template from './movie-item.html';
import './movie-item.scss';

export default {
    bindings: {
        data: '<'
    },
    controllerAs: 'movie',
    template
};
