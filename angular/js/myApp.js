angular.module('myApp', [])
.directive('myDirective', function(){
    return{
      restrict:'E',
      templateUrl: 'templates/home.html'
    };
});
