//custom js file
$(document).ready(function() {
	//back-end logic
	
//front-end/user-interface
	$("button#button2").click(function(event) {
		var userInput = parseInt($("input#input").val());//takes user iput
		//var resultOfArray = pingpongLoop(resultOfArray);//uses user input as argument to function and return the sequence
  	$("p#append").text(userInput);
  	event.preventDefault();
  });

});