;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Steps', steps)

  /** @ngInject */
  function steps () {
    var data = {
      0: {
        form: 'profileForm',
        route: 'main.profile',
        title: 'Profile'
      },
      1: {
        form: 'moviesForm',
        route: 'main.movies',
        title: 'Movies'
      },
      2: {
        form: 'seriesForm',
        route: 'main.series',
        title: 'Series'
      },
      3: {
        form: 'foodForm',
        route: 'main.food',
        title: 'Food'
      },
      4: {
        form: 'reviewForm',
        route: 'main.review',
        title: 'Review'
      }
    }

    return {
      getSteps: function () {
        return data
      }
    }
  }

})()
