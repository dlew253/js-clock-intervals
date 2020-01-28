var hourH = document.getElementById('hour');
var minuteH = document.getElementById('minute');
var secondH = document.getElementById('second');

let secCount = 0;
let minCount = 1;
let hourCount = 0;


setInterval(function() {
    secondH.style.transform = 'rotate(' + secCount + 'deg)';
    secCount += 6;
}, 10);

setInterval(function() {
    minuteH.style.transform = 'rotate(' + minCount + 'deg)';
    minCount += 6;
}, 600);

setInterval(function() {
    hourH.style.transform = 'rotate(' + hourCount + 'deg)';
    hourCount += 30;
}, 18000);
    

//function initClock() {
    //var hour = date.getHours() % 12; 
    //var minute = date.getMinutes();
    //var second = date.getSeconds();

    //console.log('hi')

  //  var secondDeg = second * 6;
   // var minuteDeg = (minute * 6); + (0.1 * second);
    //var hourDeg = (hour * 30) + (0.5 * minute);
    
    

  //  hourH.style.transform = 'rotate(' + hourDeg + 'deg)';
  //  minuteH.style.transform = 'rotate(' + minuteDeg + 'deg)';
    


    
    //setInterval(initClock, 1000)