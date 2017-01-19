var aa = function( data ) {
	console.log(data);
}


// execution start here : main function
var main_func = function() {

	var tmp = {"foo":"bar","alok":{"a":"b"}};

	$.ajax({
		type:"POST",
		url:"http://localhost:8080/RL-WebServices-0.1/api/v1/story/aggregate", 
		headers:{ "Content-Type": "application/json" },
		data:JSON.stringify(tmp),
		// data:tmp,
		success:aa,
		error:aa,
		dataType: "json"
	});

}


$(main_func);


