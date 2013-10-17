var $range = $('.range');
var $rangeRover = $(".range-rover");

$(function(){

	$('form').on('click', function(){
		console.log(this)
		// $(this).addClass('highlight');
		$('body').addClass('highlight');
	});

	function showValue(newValue){
		$range.text(newValue);
	}

	$rangeRover.on("change", function(e){
		e.preventDefault()
		// console.log("thisis",this)
		// console.log($rangeRover[0].value)
		showValue($rangeRover[0].value)

	})

	$("#signup-form").submit(function(e){
        e.preventDefault();
        console.log(this);
        $('#message').empty();
        $('#loader').addClass('move');


        //make a post request to our /signup endpoint
        $.post('/signup', $(this).serialize(), function(data){
                console.log("posted");
                // stop the loader
                $('#loader').removeClass('move');


                //if there was an error, show the error
                if(data.error){
                        // add the error text to the error div
                        $('#message').text(data.error);

                }

                // if the request returned a success message, display it.
                if(data.success){
                        
                        $('#message').text(data.success);
                        
                }
        });
        
    });


	//WUNDERGROUND API
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

});