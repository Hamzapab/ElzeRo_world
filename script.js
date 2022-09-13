// Skill section
let skill = document.querySelector(".skill");
let skillOne = document.querySelector(".one")
let skillTwo = document.querySelector(".two")
let skillThree = document.querySelector(".three")
let skillFour = document.querySelector(".four")

window.addEventListener("scroll",()=>{
  if(window.scrollY >= skill.offsetTop - 100){
    skillOne.firstElementChild.style.width = "80%";
    skillTwo.firstElementChild.style.width = "85%";
    skillThree.firstElementChild.style.width = "70%";
    skillFour.firstElementChild.style.width = "80%";
  }
})

//  event section 
// setting time

// The End Of The Year Date
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
//   let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
let days = Math.floor(dateDiff / (86400000));
let hours = Math.floor((dateDiff % 86400000) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
  clearInterval(counter);
}
}, 1000);

//  PLan section
//  create check mark next to the li
let theList = document.querySelectorAll(".plan-list");


for(let i = 0; i < theList.length;i++){
  for(let j = 0; j < theList[i].children.length;j++){
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-check"
    theList[i].children[j].appendChild(icon);
  }
}


// State section
let state = document.querySelector(".state");
let boxSpan = document.querySelectorAll(".state .box span");
let started = false; // Function Started ? No

window.addEventListener("scroll",()=>{
  if(window.scrollY >= state.offsetTop - 100){
    if(!started){
      boxSpan.forEach((num)=>{
        startCount(num)
      })
    }
    started = true;
  }
})

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
