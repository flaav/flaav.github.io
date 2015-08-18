angular.module('myApp', [])

.directive('attributeDirective', function($log){
    return{
      restrict:'A',
      template: '<p>An attribute directive</p>',
      link: function(scope, el, attrs){
          $log.log(el.html());
          $log.log(attrs.attributeDirective);
          $log.log(attrs.someAttr);
      }
    };
});
