;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Steps', steps)

  /** @ngInject */
  function steps () {
    var data = [{
      form: 'profileForm',
      route: 'main.profile',
      title: 'Profile'
    }, {
      form: 'moviesForm',
      route: 'main.movies',
      title: 'Movies'
    }, {
      form: 'seriesForm',
      route: 'main.series',
      title: 'Series'
    }, {
      form: 'foodForm',
      route: 'main.food',
      title: 'Food'
    }, {
      form: 'reviewForm',
      route: 'main.review',
      title: 'Review'
    }]

    return {
      getSteps: function () {
        return data
      }
    }
  }

})()
