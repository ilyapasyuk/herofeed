import angular from 'angular';
import CoreModule from './core/core.module';
import MoviesModule from './movies/movies.module';
import GamesModule from './games/games.module';

angular.module('app', [
    CoreModule,
    MoviesModule,
    GamesModule
]).config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
});
