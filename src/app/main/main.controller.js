;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController ($state, Steps, Movies, Series, Foods) {
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

    vm.isFirstStep = function () {
      if (vm.currentStep === 0) {
        return true
      } else {
        return false
      }
    }

    vm.isLastStep = function () {
      if (vm.currentStep === (vm.steps.length - 1)) {
        return true
      } else {
        return false
      }
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

    vm.getSeasons = function (callback) {
      callback(Series.getSeasons())
    }

    vm.getSeason = function (season, callback) {
      if (!season) season = vm.seriesForm.season
      Series.getSeason(season).then(function (res) {
        vm.season = res.data
        if (callback) callback(res.data)
      }, function (err) {
        console.log(err)
        if (callback) callback()
      })
    }

    vm.getFoods = function (callback) {
      callback(Foods.getFoods())
    }

    vm.isWelcomeState = function () {
      return $state.current.name === 'main'
    }

    function init () {
      vm.steps = Steps.getSteps()
      vm.getMovies(function (movies) {
        if (movies) vm.movies = movies
      })
      vm.getSerie(function (serie) {
        if (serie) vm.serie = serie
      })
      vm.getSeasons(function (seasons) {
        vm.seasons = seasons
      })
      vm.getFoods(function (foods) {
        vm.foods = foods
      })
    }

    init()
  }
})()
