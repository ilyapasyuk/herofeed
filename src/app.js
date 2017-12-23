import angular from 'angular';
import CoreModule from './core/core.module';
import MoviesModule from './movies/movies.module';
import GamesModule from './games/games.module';
import HeroModule from './hero/hero.module';
require('ngreact');

angular.module('app', [
    'react',
    CoreModule,
    MoviesModule,
    GamesModule,
    HeroModule
]).config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
});
