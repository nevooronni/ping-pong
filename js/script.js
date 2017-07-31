//custom js file
$(document).ready(function() {
	
//front-end/user-interface
	$("#position").hide();
	$("#output").hide();
	$("#button").click(function() {
		//$("#disapear").hide();
		$("#position").show();
		$("#disapear").hide();
	});
		//button two that returns the array
	$("#button2").click(function() {
  	$("#append").text();
  	$("#output").show();
  });

});