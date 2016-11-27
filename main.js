$(document).ready(function(){
	$('#sent').click(function(e){
		$('#display').html('');
		var sentGet = $.get('http://ShakeItSpeare.com/api/sentence').done(function(data){
		var sentStore = jQuery.parseJSON(sentGet.responseText).sentence;
		$('#display').append(sentStore);
		});
		e.preventDefault();
	});
	$('#poem').click(function(e){
		$('#display').html('');
		var numLines = $("#poLines").val();
		var url = '';
		if (numLines>0){
			poemUrl = 'http://ShakeItSpeare.com/api/poem?lines='+numLines;
		}
		else{
			poemUrl = 'http://ShakeItSpeare.com/api/poem';
		}
		var poemGet = $.get(poemUrl).done(function(data){
		var poemStore = jQuery.parseJSON(poemGet.responseText).poem;
		console.log(typeof poemStore);
		//console.log(poemStore);

		$('#display').append(poemStore);

		});
		e.preventDefault();
	});
});

/*
for(var i=0; i<poemStore.length;i++){
	if(poemStore[i]==='.'||poemStore[i]==='!'||poemStore[i]==='?'){
	poemStore.splice(i+1,0,'\');
//	poemStore.splice(i+2,0,'n');
	console.log('brreak!!');
	}
}



*/

//http://ShakeItSpeare.com/api/sentence
//http://ShakeItSpeare.com/api/poem