
let time = prompt("Enter Time (Expressed in Seconds)");
let interval = null;
let rotateDay = 0;
let rotateHour = 0;
let rotateMin = 0;
let rotateSec = 0;

let counter = {
  updateCountdown: (paths) =>{
    const {dayDisplay, hourDisplay, minDisplay, secDisplay} = this.convertTimeInProperlyDate(time);
    paths.countDay.innerHTML = `${dayDisplay}`;
    paths.countHour.innerHTML = `${hourDisplay}`;
    paths.countMin.innerHTML = `${minDisplay}`;
    paths.countSec.innerHTML = `${secDisplay}`;
  
    rotateSec = rotateSec + 360;
    paths.cardSec.style.transform = `rotateX(${rotateSec}deg)`;
   
    if ((time + 1) % 60 == 0) {
      rotateMin = rotateMin + 360;
      paths.countMin.style.transform = `rotateX(${rotateMin}deg)`;
    }
  
    if (((time + 1) / 60) % 60 == 0) {
      rotateHour = rotateHour + 360;
      paths.cardHour.style.transform = `rotateX(${rotateHour}deg)`;
    }
  
    if (((time + 1) / 60 / 60) % 24 == 0) {
      rotateDay = rotateDay + 360;
      paths.cartDay.style.transform = `rotateX(${rotateDay}deg)`;
    }
  
    time--;
    time = time < 0 ? clearInterval(interval) : time;
  },
  init: ()=> {
    const paths = {
      countDay : document.getElementById("countDay"),
      cartDay : document.getElementById("cardDay"),
      
      countHour : document.getElementById("countHour"),
      cardHour : document.getElementById("cardHour"),

      countMin : document.getElementById("countMin"),
      cardMin : document.getElementById("cardMin"),

      countSec : document.getElementById("countSec"),
      cardSec : document.getElementById("cardSec"),
    }
    interval =  setInterval(counter.updateCountdown, 1000,paths);
  }
};

window.addEventListener('load',  () =>{
  counter.init()
})

// Helpers
function convertTimeInProperlyDate(time){
  const dayDisplay = Math.floor(time / 60 / 60 / 24);
  const hourDisplay = Math.floor((time / 60 / 60) % 24);
  const minDisplay = Math.floor((time / 60) % 60);
  const secDisplay = Math.floor(time % 60);
  return {
    dayDisplay,
    hourDisplay,
    minDisplay,
    secDisplay,
  }
}

function card(card ,value,valueId, label) {
  const cardString =   `<div class=card-container>
  <div class="${label}">
    <div id="${card}" class="card">
      <h1 id="${valueId}">${value}</h1>
      <div class="halfcircle"></div>
      <div class="halfcircle right"></div>
    </div>
  
    <div class="half-bottom-card"></div>
  </div>
  <div class="label">
    <p>${label}</p>
  </div>
  </div>`;
  return cardString;
}

