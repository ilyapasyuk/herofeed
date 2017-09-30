import angular from 'angular';
import HeroPageComponent from './hero-page/hero-page.component';
import HeroService from './hero.service';

export default angular.module('app.hero', [])
    .service('Hero', HeroService)
    .component('heroPage', HeroPageComponent)
    .config(($stateProvider) => {
        $stateProvider.state('hero', {
            url: '/:idHero',
            component: 'heroPage',
            resolve: {
                hero: ($stateParams, Hero) => {
                    /* @ngInject */
                    return Hero.getHero($stateParams.idHero);
                }
            }
        });
    })
    .name;
