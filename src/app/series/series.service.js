;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Series', series)

  /** @ngInject */
  function series ($http) {
    return {
      getSerie: function () {
        return $http({
          method: 'GET',
          url: 'http://www.omdbapi.com/?t=Game%20of%20Thrones'
        })
      },
      getSeason: function (season) {
        return $http({
          method: 'GET',
          url: 'http://www.omdbapi.com/?t=Game%20of%20Thrones&amp;Season=' + season
        })
      }
    }
  }

})()
