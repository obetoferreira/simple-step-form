;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .config(routerConfig)

  /** @ngInject */
  function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'components/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.profile', {
        url: '/profile',
        templateUrl: 'components/profile/profile.html'
      })
      .state('main.movies', {
        url: '/movies',
        templateUrl: 'components/movies/movies.html'
      })
      .state('main.series', {
        url: '/series',
        templateUrl: 'components/series/series.html'
      })
      .state('main.series.season', {
        url: '/series/season',
        templateUrl: 'components/season/season.html'
      })
      .state('main.food', {
        url: '/food',
        templateUrl: 'components/food/food.html'
      })
      .state('main.review', {
        url: '/review',
        templateUrl: 'components/review/review.html'
      })
      .state('done', {
        url: '/done',
        templateUrl: 'components/done/done.html',
        controller: 'DoneController',
        controllerAs: 'done'
      })

    $urlRouterProvider.otherwise('/')
  }

})()
