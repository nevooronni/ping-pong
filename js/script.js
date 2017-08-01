//custom script

//back-end code 
var pingpongLoop = function(userInput) {///variable that starts the loop
	var resultOfArray = [];
	for(var i = 1; i <= userInput; i += 1) {//loop
		if(((i % 3) === 0) && ((i % 5) === 0)) {//1condition
			resultOfArray.push("pingpong");
		} else if ((i % 3) === 0) {//second condition
			resultOfArray.push("ping");
		} else if ((i % 5) === 0) {//third condition
			resultOfArray.push("pong");
		} else {
			resultOfArray.push(i);//outcome
		}
	}
	return resultOfArray;
}


//Front-end jquery code
$(document).ready(function() {
	//loop that generates the number sequence 
$("#button2").click(function(event) {
		event.preventDefault();
		var userInput = parseInt($("#enter").val());//takes user iput
		var resultOfArray = pingpongLoop(userInput);//uses user input as argument to function and return the sequence
  	$("#append").text(resultOfArray);
  });
	$("#reset").click(function(event) {
    location.reload();
  });
});

