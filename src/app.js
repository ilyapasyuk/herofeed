import angular from 'angular';
import CoreModule from './core/core.module';
import MoviesModule from './movies/movies.module';
import GamesModule from './games/games.module';
import HeroModule from './hero/hero.module';

angular.module('app', [
    CoreModule,
    MoviesModule,
    GamesModule,
    HeroModule
]).config(($compileProvider, $locationProvider) => {
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
    $locationProvider.html5Mode(true);
});
