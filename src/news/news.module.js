import angular from 'angular';
import NewsListComponent from './news-list/news-list.component';
import NewsItemComponent from './news-item/news-item.component';
import NewsPageComponent from './news-page/news-page.component';
import NewsService from './news.service';

export default angular.module('app.news', [])
    .service('News', NewsService)
    .component('newsList', NewsListComponent)
    .component('newsItem', NewsItemComponent)
    .component('newsPage', NewsPageComponent)
    .config(($stateProvider) => {
        $stateProvider.state('news', {
            url: '/blog',
            component: 'newsList',
            resolve: {
                list: (News) => {
                    /* @ngInject */

                    return News.getList();
                }
            }
        }).state('newsPage', {
            url: '/blog/:idPost',
            component: 'newsPage',
            resolve: {
                data: (News, $stateParams) => {
                    /* @ngInject */

                    return News.getPost($stateParams.idPost);
                }
            }
        });
    })
    .name;
