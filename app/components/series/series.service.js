;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Series', series)

  /** @ngInject */
  function series ($http, apiKey) {

    function endpoint () {
      var path = 'http://www.omdbapi.com/?'
      if (apiKey) {
        return path + 'apiKey=' + apiKey + '&'
      }
      return path
    }

    return {
      getSerie: function () {
        return $http({
          method: 'GET',
          url: endpoint() + 't=Game%20of%20Thrones'
        })
      },
      getSeasons: function () {
        var data = [1, 2, 3, 4, 5, 6]
        return data
      },
      getSeason: function (season) {
        return $http({
          method: 'GET',
          url: endpoint() + 't=Game%20of%20Thrones&Season=' + season
        })
      }
    }
  }

})()
