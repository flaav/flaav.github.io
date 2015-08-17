angular.module('myApp', [])

.directive('elementDirective', function($log){
    return{
      restrict:'E',
      template: '<p>Za template</p>',
      link: function(scope, el, attrs){
          $log.log(el.html());
          $log.log(attrs.someAttr);
      }
    };
});
