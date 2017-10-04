import angular from 'angular';
import CoreModule from './core/core.module';
import MoviesModule from './movies/movies.module';
import GamesModule from './games/games.module';
import HeroModule from './hero/hero.module';
import NewsModule from './news/news.module';

angular.module('app', [
    CoreModule,
    MoviesModule,
    GamesModule,
    HeroModule,
    NewsModule
]).config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
});
