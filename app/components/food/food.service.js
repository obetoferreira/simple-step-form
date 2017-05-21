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
          Poster: 'http://uhaweb.hartford.edu/MNUNEZ/Veggies.jpg',
          Title: 'I am an insect',
        }, {
          Poster: 'http://www.relatemag.com/wp-content/uploads/2011/07/pasta-1024x682.jpg',
          Title: 'I love pasta',
        }, {
          Poster: 'http://www.inspiredliving.co.za/wp-content/uploads/2014/02/Red-Meat.jpg',
          Title: 'Gimme meat',
        }, {
          Poster: 'http://www.ralphlaurenpaint.com/FILE/1606/finish_riverrock_888x683.jpg',
          Title: 'Is it food? I am in.',
        }]
        return data
      }
    }
  }

})()
