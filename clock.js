






var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

  
let secondDegrees = 360/60;
let minuteDegrees = 360/60/60;
let hourDegrees = 360/60/60/12;

let clock = setInterval(function() {
    console.log("loopie bois");  

    var date = new Date();

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

    hour.style.transform = "rotate(" + hourDegrees + "deg)";
    hourDegrees = hourDegrees + 360/60/60/12;
    // curTime
    // hourDegrees = hr*360/12 + ((min * 360/60)/12);

    minute.style.transform = "rotate(" + minuteDegrees + "deg)";
    minuteDegrees = minuteDegrees + 360/60/60;
    // curTime
    // minuteDegrees = (min * 360/60) + (sec* 360/60)/60;

    second.style.transform = "rotate(" + secondDegrees + "deg)";
    secondDegrees = secondDegrees + 360/60;
    // curTime
    // secondDegrees = sec * 360/60;

}, 1000);







   

