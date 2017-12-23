import angular from 'angular';
import GamesListComponent from './games-list/games-list.directive';
import GamesService from './games.service';

const Games = new GamesService();

export default angular.module('app.games', [])
    .directive('gameList', GamesListComponent)
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
