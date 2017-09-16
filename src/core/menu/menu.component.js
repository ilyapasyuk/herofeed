import template from './menu.html';
import './menu.scss';

export default {
    controller: MenuController,
    controllerAs: 'menu',
    template
};


/* @ngInject */
function MenuController() {
    const vm = this;

    vm.pages = [
        {
            state: 'games',
            name: 'Игры',
            icon: 'games'
        }, {
            state: 'movies',
            name: 'Кино',
            icon: 'local-movies'
        }
    ]
}
