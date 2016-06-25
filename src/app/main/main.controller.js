;(function () {
  'use strict'

  angular
    .module('simpleStepForm')
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController ($state, Steps) {
    var vm = this

    vm.steps = Steps.getSteps()

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

    vm.setCurrentStep(0)
  }
})()
