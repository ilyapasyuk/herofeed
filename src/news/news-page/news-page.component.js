import template from './news-page.html';
import './news-page.scss';

export default {
    bindings: {
        data: '<'
    },
    controller: NewsPageController,
    controllerAs: 'newsPage',
    template
};


/* @ngInject */
function NewsPageController() {
    const vm = this;
}
