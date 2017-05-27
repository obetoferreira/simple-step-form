;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .directive('myHeader', function() {
      return {
        templateUrl: '/components/header/header.html'
      };
    })
})()
