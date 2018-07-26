$(document).ready(function() {
	
//set the date we're counting down to
var countDownDate = new Date("July 28, 2061 15:30:25").getTime();

// update the count every 1second
var x = setInterval(function () {

	//get today date and time
	var now = new Date().getTime();
	// caculate distance between now and that day
	var distance=countDownDate - now;
	//caculate for year ,month,days,hour,minute,second
	//year
	/*var year = Math.floor(distance/(12*30*24*60*60*1000)); 
	var month= Math.floor( (distance % (12*30*24*60*60*1000))/(30*24*60*60*1000));
	var day = Math.floor((distance % (30*24*60*60*1000))/(24*60*60*1000));
	var hour = Math.floor((distance % (24*60*60*1000))/(60*60*1000));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);*/
	var year = Math.floor(distance/(31104000000)); 
	var month= Math.floor( (distance % (31104000000))/(2592000000));
	var day = Math.floor((distance % (2592000000))/(86400000));
	var hour = Math.floor((distance % (86400000))/(3600000));
	var minutes = Math.floor((distance % (3600000)) / (60000));
	var seconds = Math.floor((distance % (60000)) / 1000);




	//set values to display for #countdown-clock
	$('#year').html(year);
	$('#year').css('fontSize', 124);
	$('#month').html(month);
	$('#month').css('fontSize', 110);
	$('#day').html(day);
	$('#day').css('fontSize', 96);
	$('#hour').html(hour);
	$('#hour').css('fontSize', 82);
	$('#minutes').html(minutes);
	$('#minutes').css('fontSize', 68);
	$('#seconds').html(seconds);
	$('#seconds').css('fontSize', 54);
	//
	//$('#countdown-clock').html(year +" year: "+ month +" month: "+day+" d: "+hour+" h: "
		//+minutes+" min: "+seconds+" s");
	 //document.getElementById("countdown-clock").innerHTML = year; 
	 


	 //if count down finished write something
	 if(distance<0)
	 {
	 	clearInterval(x);
	 	$('#countdown-clock').html("Harley is very close. Go out and look.");
	 }

	
},1000); 
	





});