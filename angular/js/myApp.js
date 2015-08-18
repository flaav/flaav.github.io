angular.module('myApp', [])

.controller('MainCtrl', function($log, $scope){
      $scope.outerval = 'mydata';
      $scope.func = function (){
         $log.log('invoked!');
      }
})
.directive('iso', function (){
   return{
      template: 'Inner: {{ outerval }}'
      scope: {
         outerval: '=myattr'
      }
   };
});
