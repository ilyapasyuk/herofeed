import angular from 'angular';
import GamesListComponent from './games-list/games-list.component';
import GameComponent from './game/game.component';
import GamesService from './games.service';

export default angular.module('app.games', [])
    .factory('Games', GamesService)
    .component('gamesList', GamesListComponent)
    .component('game', GameComponent)
    .config(($stateProvider) => {
        $stateProvider.state('games', {
            url: '/games',
            component: 'gamesList',
            resolve: {
                list: (Games) => {
                    /* @ngInject */
                    return Games.getList();
                }
            }
        });
    })
    .name;
