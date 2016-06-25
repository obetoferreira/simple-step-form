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
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html'
      })
      .state('main.movies', {
        url: '/movies',
        templateUrl: 'app/movies/movies.html'
      })
      .state('main.series', {
        url: '/series',
        templateUrl: 'app/series/series.html'
      })
      .state('main.series.season', {
        url: '/series/season',
        templateUrl: 'app/season/season.html'
      })
      .state('main.food', {
        url: '/food',
        templateUrl: 'app/food/food.html'
      })
      .state('main.review', {
        url: '/review',
        templateUrl: 'app/review/review.html'
      })
      .state('done', {
        url: '/done',
        templateUrl: 'app/done/done.html',
        controller: 'DoneController',
        controllerAs: 'done'
      })

    $urlRouterProvider.otherwise('/')
  }

})()
