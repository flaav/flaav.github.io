angular.module('myApp', [])

.directive('elementDirective', function($log){
    return{
      restrict:'E',
      templateUrl: '<p>The template</p>',
      link: function(scope, el, attrs){
          $log.log(attrs.someAttr);
      }
    };
});
