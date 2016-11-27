var nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=TM02fKLGmAAcOGDuCAwXExJ0bbdFMBEgu8dPOZyL';
var getFunc = function(err){ ///used to dry out code 
		$('#display').html(''); //clears previous image

		var dateInput = $("#dateIn").val();
		var picUrl;
			if(dateInput === 'YYYY-MM-DD'){
			picUrl = nasaUrl;
			} else {
			picUrl =  nasaUrl+'&date='+dateInput;
			}
		var imgGet = $.get(picUrl).done(function(data){
		var imgStore = jQuery.parseJSON(imgGet.responseText).url;
			console.log(imgStore);
			$('#display').append('<img src="'+ imgStore+'">');
		});
	};


$(document).ready(function(){
	$('#nasaPic').click(function(e){
		getFunc();
		e.preventDefault();
	});

	$('#dateBtn').click(function(e){
		getFunc();
		e.preventDefault();
	});
		
});




/*
https://api.nasa.gov/api.html#apod

NASA PIC OF DAY
GET https://api.nasa.gov/planetary/apod
date
https://api.nasa.gov/planetary/apod?api_key=TM02fKLGmAAcOGDuCAwXExJ0bbdFMBEgu8dPOZyL&date=2016-09-07

ASTROIDS
GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY



NASA PATENTS
GET https://api.nasa.gov/patents




key
https://api.nasa.gov/planetary/apod?api_key=TM02fKLGmAAcOGDuCAwXExJ0bbdFMBEgu8dPOZyL
*/