(function() {
  'use strict';

  angular
    .module('simpleStepForm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
