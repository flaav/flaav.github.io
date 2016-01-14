$(document).ready(function() { 
  var d = new Date();
  //alert(d);

   $('.accordion')
	  .accordion({
	    selector: {
	      trigger: '.title'
	    }
	});

});
