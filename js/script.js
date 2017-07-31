//custom js file
$(document).ready(function() {
	//back-end logic
	var start = 1;
	var end = parseInt($("input[name='number']").val());
	
//front-end/user-interface
	$("#position").hide();
	$("#output").hide();
	$("#button").click(function() {

		$("div#position").show();
		$("div#disapear").hide();
	});
		//button two that returns the array
	$("button#button2").click(function(event) {
  	$("p#append").text(end);
  	$("div#output").show();
  	event.preventDefault();
  });

	

	//var hard = function range(start, end) {		
		////var array = new Array();

		//for(var i = start; i < end; i++) {
			//array.push(i);
		//}
	//}
});