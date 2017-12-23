import angular from 'angular';
import GamesListComponent from './games-list/games-list.directive';
import GameComponent from './game-item/game-item.directive';
import GamesService from './games.service';

export default angular.module('app.games', [])
    .service('Games', GamesService)
    .directive('gameList', GamesListComponent)
    .directive('gameItem', GameComponent)
    .config(($stateProvider) => {
        $stateProvider.state('games', {
            url: '/games',
            resolve: {
                list: (Games) => {
                    /* @ngInject */
                    return Games.getList();
                }
            },
            template: '<game-list list="$resolve.list"></game-list>'
        });
    })
    .name;
