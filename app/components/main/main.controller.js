;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController ($state, Steps, Movies, Series, Foods) {
    var vm = this

    vm.status = {
      movies: {
        error: false,
        fetched: false
      },
      serie: {
        error: false,
        fetched: false
      }
    }

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
        vm.status.movies.fetched = true
        vm.status.movies.error = false
        callback(res.data.Search)
      }, function (err) {
        vm.status.movies.fetched = false
        vm.status.movies.error = true
        console.log(err)
        callback()
      })
    }

    vm.getSerie = function (callback) {
      Series.getSerie().then(function (res) {
        vm.status.serie.fetched = true
        vm.status.serie.error = false
        callback(res.data)
      }, function (err) {
        vm.status.serie.fetched = false
        vm.status.serie.error = true
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

    function removeStep (index) {
      vm.steps.splice(index, 1)
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
