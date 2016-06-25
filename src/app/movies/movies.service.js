;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Movies', movies)

  /** @ngInject */
  function movies ($http) {
    return {
      getMovies: function () {
        return $http({
          method: 'GET',
          url: 'http://www.omdbapi.com/?s=%22Star%20Wars:%20Episode%22'
        })
      }
    }
  }

})()
