import angular from 'angular';
import MoviesListComponent from './movies-list/movies-list.component';
import MovieComponent from './movie-item/movie.component';
import MoviesService from './movies.service';

export default angular.module('app.movies', [])
    .factory('Movies', MoviesService)
    .component('moviesList', MoviesListComponent)
    .component('movie', MovieComponent)
    .config(($stateProvider) => {
        $stateProvider.state('movies', {
            url: '/movies',
            component: 'moviesList',
            resolve: {
                list: (Movies) => {
                    /* @ngInject */
                    return Movies.getList();
                }
            }
        });
    })
    .name;
