import template from './news-item.html';
import './news-item.scss';

export default {
    bindings: {
        data: '<'
    },
    controllerAs: 'newsItem',
    template
};
