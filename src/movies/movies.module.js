import angular from 'angular';
import MovieListComponent from './movie-list/movie-list.component';
import MovieItemComponent from './movie-item/movie-item.component';
import MoviePageComponent from './movie-page/movie-page.component';
import MoviesService from './movies.service';

export default angular.module('app.movies', [])
    .service('Movies', MoviesService)
    .component('movieList', MovieListComponent)
    .component('movieItem', MovieItemComponent)
    .component('moviePage', MoviePageComponent)
    .config(($stateProvider) => {
        $stateProvider.state('movies', {
            url: '/movies',
            component: 'movieList',
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
