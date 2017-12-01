import angular from 'angular';
import MovieListComponent from './movie-list/movie-list.directive';
import MovieItemComponent from './movie-item/movie-item.directive';
import MoviePageComponent from './movie-page/movie-page.component';
import MoviesService from './movies.service';

export default angular.module('app.movies', [])
    .service('Movies', MoviesService)
    .directive('movieList', MovieListComponent)
    .directive('movieItem', MovieItemComponent)
    .component('moviePage', MoviePageComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('movies', {
                url: '/movies',
                resolve: {
                    list: (Movies) => {
                        /* @ngInject */

                        return Movies.getList();
                    }
                },
                template: '<movie-list list="$resolve.list"></movie-list>'
            })
            .state('moviePage', {
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
