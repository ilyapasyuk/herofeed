import template from './hero-page.html';
import './hero-page.scss';

export default {
    bindings: {
        hero: '<'
    },
    controller: HeroPageController,
    controllerAs: 'heroPage',
    template
};

/* @ngInject */
function HeroPageController() {
    const vm = this;
}
