
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var offer = getUrlParameter('offer');


localStorage.setItem("started", "true");
var storageVal = localStorage.getItem("started");
console.log(storageVal);



if (storageVal) {
    if (storageVal === "true") {

       localStorage.setItem("started", "false");

	storageVal = localStorage.getItem("started");
        console.log(storageVal);




// Set the date we're counting down to

	var countdown = 600000; 
	var countdowntime = new Date().getTime()+countdown;
	localStorage.setItem("countdowntime", countdowntime);
	var countDownDate = localStorage.getItem("countdowntime");

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days =  ("0" +Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
  var hours = ("0" +Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds =  ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes+"&nbsp;&nbsp;" + seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").style= "font-family:Gulf Bold Custom; font-weight: 800; font-size: 45px; line-height: 1; color: #ffffff;";  
    document.getElementById("demo").innerHTML = "انتهى العرض";

    document.getElementsByClassName('buttons1593693775606')[0].target="_self";
    document.getElementsByClassName('buttons1593693775606')[0].href="https://thakea.com/";
    document.getElementsByClassName('buttons1593693775606')[1].target="_self";
    document.getElementsByClassName('buttons1593693775606')[1].href="https://thakea.com/";
    document.getElementsByClassName('btn-text')[0].innerHTML="راح عليكـ(ـي) العرض";
    document.getElementsByClassName('btn-text')[1].innerHTML="راح عليكـ(ـي) العرض";
  }
}, 1000);

        console.log(storageVal);
    }
	else if (storageVal === "false") {

        console.log(storageVal);

    }


}

