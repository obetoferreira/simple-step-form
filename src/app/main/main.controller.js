;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController ($state, Steps, Movies, Series) {
    var vm = this

    vm.isDirtyStep = function (step) {
      if (step <= vm.currentStep) {
        return true
      } else {
        return false
      }
    }

    vm.setCurrentStep = function (val) {
      vm.currentStep = val
      vm.currentStepObj = vm.steps[vm.currentStep]
      $state.go(vm.currentStepObj.route)
    }

    vm.nextStep = function () {
      vm.setCurrentStep(vm.currentStep + 1)
    }

    vm.prevStep = function () {
      vm.setCurrentStep(vm.currentStep - 1)
    }

    vm.getMovies = function (callback) {
      Movies.getMovies().then(function (res) {
        callback(res.data.Search)
      }, function (err) {
        console.log(err)
        callback()
      })
    }

    vm.getSerie = function (callback) {
      Series.getSerie().then(function (res) {
        callback(res.data)
      }, function (err) {
        console.log(err)
        callback()
      })
    }

    vm.getSeason = function (season, callback) {
      Series.getSeason(season).then(function (res) {
        callback(res.data)
      }, function (err) {
        console.log(err)
        callback()
      })
    }

    function init () {
      vm.steps = Steps.getSteps()
      vm.setCurrentStep(0)
      vm.getMovies(function (movies) {
        if (movies) vm.movies = movies
      })
      vm.getSerie(function (serie) {
        if (serie) vm.serie = serie
      })
    }

    init()
  }
})()
