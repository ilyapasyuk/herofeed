import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app/app.component';
import MenuComponent from './menu/menu.directive';
import './core.scss';

export default angular.module('app.core', [uiRouter])
    .component('app', AppComponent)
    .directive('menu', MenuComponent)
    .config(($urlServiceProvider) => {
        $urlServiceProvider.rules.otherwise({
            state: 'movies'
        });
    })
    .name;
