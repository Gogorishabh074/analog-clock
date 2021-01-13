setInterval(setClock, 1000);

let hourHand = document.querySelector('[data-hour-hand]');
let minuteHand = document.querySelector('[data-minute-hand]');
let secondHand = document.querySelector('[data-second-hand]');

function setClock(){
   
    let currentDate = new Date();
   
    let seconds = currentDate.getSeconds();
    let secondsRatio = seconds/60;
    
    let minute = secondsRatio + currentDate.getMinutes();
    let minuteRatio = minute /60;

    let hour = minuteRatio + currentDate.getHours();
    let hourRatio = hour / 12;
    
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();