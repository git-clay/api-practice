var genUrl = 'https://api.nasa.gov/';
var apiKey = 'api_key=TM02fKLGmAAcOGDuCAwXExJ0bbdFMBEgu8dPOZyL';
var nasaUrl = genUrl+ 'planetary/apod?'+apiKey;
var marsUrl = genUrl+ '/mars-photos/api/v1/rovers/curiosity/photos?';

var getFunc = function(){ ///used to dry out code 
		$('#display').html(''); //clears previous image
		var dateInput = $("#dateIn").val();
		var imgGet;
		var imgStore;
		var picUrl;
			if(dateInput !== 'YYYY-MM-DD'){
			picUrl =  nasaUrl+'&date='+dateInput;
			} else if(dateInput === 'YYYY-MM-DD'){
			picUrl = nasaUrl;
			}
		imgGet = $.get(picUrl).done(function(data){
			imgStore = jQuery.parseJSON(imgGet.responseText).url;
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

	$('#marsBtn').click(function(e){
		$('#display').html(''); 
		picUrl= marsUrl+'sol='+(Math.floor(Math.random()*1500))+'&'+apiKey;
		imgGet = $.get(picUrl).done(function(data){
			imgStore = jQuery.parseJSON(imgGet.responseText).photos[(Math.floor(Math.random()*20))].img_src;
			$('#display').append('<img src="'+ imgStore+'">');
		})
		.fail(function(){
			console.log('failed');
			$('#marsBtn').click();
		});
		e.preventDefault();
	});	
});

/*
	
*/


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

MARS
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-6-3&api_key=TM02fKLGmAAcOGDuCAwXExJ0bbdFMBEgu8dPOZyL

key
https://api.nasa.gov/planetary/apod?api_key=TM02fKLGmAAcOGDuCAwXExJ0bbdFMBEgu8dPOZyL
*/