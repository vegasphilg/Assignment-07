$(document).ready(function() { 

	$("#Add").on("Click", function() {
		var num_one = $("num_one").val();
		var	num_two = $("num_two").val();
		$("#answer").html(add(num_one,num_two));
});

	$("#Subtract").on("Click", function() {
		var num_one = $("num_one").val();
		var	num_two = $("num_two").val();
		$("#answer").html(subtract(num_one,num_two));
});
	$("#Multiply").on("Click", function() {
		var num_one = $("num_one").val();
		var	num_two = $("num_two").val();
		$("#answer").html(multiply(num_one,num_two));
});
	$("#Divide").on("Click", function() {
		var num_one = $("num_one").val();
		var	num_two = $("num_two").val();
		$("#answer").html(divide(num_one,num_two));
});

function add(num_one, num_two){
	return parseInt(num_one, 10) + parseInt(num_two, 10);
}

function subtract(num_one, num_two){
	return parseInt(num_one, 10) - parseInt(num_two, 10);
}

function multiply(num_one, num_two){
	return parseInt(num_one, 10) * parseInt(num_two, 10);
}

function divide(num_one, num_two){
	return parseInt(num_one, 10) / parseInt(num_two, 10);
}

});




