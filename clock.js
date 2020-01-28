let secondDegrees = 360/60;
let minuteDegrees = 360/60/60/60;
let hourDegrees = 360/60/12;

var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");




let clock = setInterval(function() {
    console.log("loopie bois");  
    second.style.transform = "rotate(" + secondDegrees + "deg)";
    secondDegrees = secondDegrees + 360/60;
    minute.style.transform = "rotate(" + minuteDegrees + "deg)";
    minuteDegrees = minuteDegrees + 360/60/60/60;
    hour.style.transform = "rotate(" + hourDegrees + "deg)";
    hourDegrees = hourDegrees + 360/60/60;
}, 1000);

