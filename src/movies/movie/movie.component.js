import template from './movie.html';
import './movie.scss';

export default {
    bindings: {
        data: '<'
    },
    template,
    controllerAs: 'movie'
};
