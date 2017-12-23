import angular from 'angular';
import HeroPageComponent from './hero-page/hero-page.directive';
import HeroService from './hero.service';

const Hero = new HeroService();

export default angular.module('app.hero', [])
    .directive('heroPage', HeroPageComponent)
    .config(($stateProvider) => {
        $stateProvider.state('hero', {
            url: '/:idHero',
            resolve: {
                data: ($stateParams) => Hero.getHero($stateParams.idHero)
            },
            template: '<hero-page data="$resolve.data"></hero-page>'
        });
    })
    .name;
