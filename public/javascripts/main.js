var $range = $('.range');
var $rangeRover = $(".range-rover");

function showValue(newValue){
	$range.text(newValue);
}

$rangeRover.on("change", function(e){
	e.preventDefault()
	// console.log("thisis",this)
	// console.log($rangeRover[0].value)
	showValue($rangeRover[0].value)

})
// c9e0072cce39cb86

// "http://api.wunderground.com/api/c9e0072cce39cb86/geolookup/q/MN/Minneapolis.json"

// jQuery(document).ready(function($) {
// 	$.ajax({
// 	url : "http://api.wunderground.com/api/c9e0072cce39cb86/temp_f/q/MN/Minneapolis.json",
// 	dataType : "jsonp",
// 	success : function(parsed_json) {
// 	var location = parsed_json['location']['city'];
// 	var temp_f = parsed_json['current_observation']['temp_f'];
// 	alert("Current temperature in " + location + " is: " + temp_f);
// 	}
// 	});
// });

