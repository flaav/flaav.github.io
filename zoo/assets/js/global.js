$(document).ready(function() { 
  var d = new Date();
  //alert(d);
  
  $('.trigger.example .accordion')
  .accordion({
    selector: {
      trigger: '.title .icon'
    }
  });
  
});
