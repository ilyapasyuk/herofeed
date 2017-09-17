import template from './menu.html';
import './menu.scss';

export default {
    controller: MenuController,
    controllerAs: 'menu',
    template
};


/* @ngInject */
function MenuController(Hero) {
    const vm = this;

    vm.searchPanel = false;

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
    ];

    vm.showSearch = () => Hero.getHeros().then((result) => {
        vm.herosList = result;
        vm.searchPanel = true;
    });

    vm.closeSearch = () => vm.searchPanel = false;

    vm.search = (word) => {

    };
}
