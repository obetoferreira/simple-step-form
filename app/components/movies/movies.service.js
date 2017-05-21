;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Movies', movies)

  /** @ngInject */
  function movies ($http, apiKey) {

    function endpoint () {
      var path = 'http://www.omdbapi.com/?'
      if (apiKey) {
        return path + 'apiKey=' + apiKey + '&'
      }
      return path
    }

    return {
      getMovies: function () {
        return $http({
          method: 'GET',
          url: endpoint() + 's=%22Star%20Wars:%20Episode%22'
        })
      }
    }
  }

})()
