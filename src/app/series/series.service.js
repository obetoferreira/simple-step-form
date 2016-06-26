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
      getSeasons: function () {
        var data = [1, 2, 3, 4, 5, 6]
        return data
      },
      getSeason: function (season) {
        return $http({
          method: 'GET',
          url: 'http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=' + season
        })
      }
    }
  }

})()
