import angular from 'angular';
import GamesListComponent from './games-list/games-list.directive';
import GameComponent from './game-item/game-item.directive';
import GamesService from './games.service';

const Games = new GamesService();

export default angular.module('app.games', [])
    .directive('gameList', GamesListComponent)
    .directive('gameItem', GameComponent)
    .config(($stateProvider) => {
        $stateProvider.state('games', {
            url: '/games',
            resolve: {
                list: () => Games.getList()
            },
            template: '<game-list list="$resolve.list"></game-list>'
        });
    })
    .name;
