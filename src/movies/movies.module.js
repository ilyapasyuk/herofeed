import angular from 'angular';
import MoviesListComponent from './movies-list/movies-list.component';
import MovieItemComponent from './movie-item/movie-item.component';
import MoviePageComponent from './movies-page/movie-page.component';
import MoviesService from './movies.service';

export default angular.module('app.movies', [])
    .factory('Movies', MoviesService)
    .component('moviesList', MoviesListComponent)
    .component('movieItem', MovieItemComponent)
    .component('moviePage', MoviePageComponent)
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
        }).state('moviePage', {
            url: '/movie/:idMovie',
            component: 'moviePage',
            resolve: {
                data: (Movies, $stateParams) => {
                    /* @ngInject */
                    return Movies.getMovie($stateParams.idMovie);
                }
            }
        });
    })
    .name;
