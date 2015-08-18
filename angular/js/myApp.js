angular.module('myApp', [])

.directive('vectorText', function($document){
   return{
       template: '<span>{{ heading }}</span>',
       link: function(scope, el, attrs){
           //init the css
           el.css({
               'float': 'left',
               'padding': attrs.buffers+"px",
               'border' : '1px solid black'
           });
           
           //init scope variable
           scope.heading= '';
           
           //set event listener and handler
           $document.on('mousemove', function(event){
               //mouseover event does not start $digest
               scope.$apply(function(){
                  if(event.pageY < 300){
                      scope.heading = 'N';
                  } else{
                      scope.heading = 'S';
                  }
                  if(event.pageX < 300 ){
                      scope.heading += 'W';
                  }else{
                      scope.heading += 'E';
                  }
                  if(event.pageX > 300 || event.pageY > 300){
                     scope.heading = 'Center';
                  }
               });
           });
       }
   }; 
});
