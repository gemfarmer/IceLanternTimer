var $weight = $('#weight');
var $temp = $('#temp');
var $rangeRover = $(".range-rover");
var $tempRover = $('.temp-rover')
var $signupForm = $('#signup-form')
var $message = $('.message')

$(function(){

	$rangeRover.on("change", function(e){
		e.preventDefault()

		if($(this).hasClass('weight')){
			$weight.text($(this)[0].value + " lbs.")
		}
		else if($(this).hasClass('temp')){
			$temp.text($(this)[0].value + " F")
		}
	})

	$signupForm.submit(function(e){
		
        e.preventDefault();
        console.log(this);
        $message.empty();
       
       

        //make a post request to our /signup endpoint
        $.post('/signup', $(this).serialize(), function(data){

                if(data.error){
                        // add the error text to the error div
                        $('#message').text(data.error);
                }
                // if the request returned a success message, display it.
                if(data.success){        
                        $('#message').text(data.success);      
                }
        });
         $signupForm.each(function(){
			this.reset();
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