;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .factory('Foods', foods)

  /** @ngInject */
  function foods () {
    return {
      getFoods: function () {
        var data = [{
          Poster: '/assets/images/veggies.jpg',
          Title: 'I am an insect',
        }, {
          Poster: '/assets/images/pasta.jpg',
          Title: 'I love pasta',
        }, {
          Poster: '/assets/images/salt-bae.jpg',
          Title: 'Gimme meat',
        }, {
          Poster: '/assets/images/rocks.jpg',
          Title: 'Is it food? I am in.',
        }]
        return data
      }
    }
  }

})()
