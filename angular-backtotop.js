/**
 * Created by hmchung2 on 7/6/15.
 */
(function () {
  'use strict';
  /**
   * @ngdoc directive
   * @name directive.backToTop:backToTop
   * @scope
   * @restrict E,A
   *
   * @description
   * This "Back to top" directive link allows users to smoothly scroll back to the top of the page
   *
   */
  angular
    .module('angular-backtoptop', [])
    .directive('backToTop', backToTop);

  /* @ngInject */
  function backToTop() {
    // Usage: <div back-to-top/>
    // 
    // Creates: hmchung2 on 7/6/15.
    // 
    var directive = {
      link: link,
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      element.on('click', function (evt) {
        angular.element('body,html').animate({
          scrollTop: 0
        }, 800);
      });
    }
  }
})();