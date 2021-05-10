// Selectors
const scrollDownButton = document.querySelector(".hero-btn-wrapper");
const audioButtons = document.querySelectorAll(".audio-btn");

// Variables
const poolAudio = new Audio("pool_audio.mp3");
poolAudio.oncanplay = function() {
  if (document.querySelector("#pool-audio-btn").checked) this.play();
}
poolAudio.onended = function() {
  const elem = document.querySelector("#pool-audio-btn");
  const iconLabel = elem.parentElement.childNodes[3].childNodes[1];
  iconLabel.classList.toggle("fa-play");
  iconLabel.classList.toggle("fa-pause");
}
const collegeAudio = new Audio("college_audio.mp3");
collegeAudio.oncanplay = function() {
  if (document.querySelector("#college-audio-btn").checked) this.play();
}
collegeAudio.onended = function() {
  const elem = document.querySelector("#college-audio-btn");
  const iconLabel = elem.parentElement.childNodes[3].childNodes[1];
  iconLabel.classList.toggle("fa-play");
  iconLabel.classList.toggle("fa-pause");
}
const healthAudio = new Audio("health_audio.mp3");
healthAudio.oncanplay = function() {
  if (document.querySelector("#health-audio-btn").checked) this.play();
}
healthAudio.onended = function() {
  const elem = document.querySelector("#health-audio-btn");
  const iconLabel = elem.parentElement.childNodes[3].childNodes[1];
  iconLabel.classList.toggle("fa-play");
  iconLabel.classList.toggle("fa-pause");
}
const singleStoryAudio = new Audio("single_story_audio.mp3");
singleStoryAudio.oncanplay = function() {
  if (document.querySelector("#single-story-audio-btn").checked) this.play();
}
singleStoryAudio.onended = function() {
  const elem = document.querySelector("#single-story-audio-btn");
  const iconLabel = elem.parentElement.childNodes[3].childNodes[1];
  iconLabel.classList.toggle("fa-play");
  iconLabel.classList.toggle("fa-pause");
}
const historyAudio = new Audio("history_audio.mp3");
historyAudio.oncanplay = function() {
  if (document.querySelector("#history-audio-btn").checked) this.play();
}
historyAudio.onended = function() {
  const elem = document.querySelector("#history-audio-btn");
  const iconLabel = elem.parentElement.childNodes[3].childNodes[1];
  iconLabel.classList.toggle("fa-play");
  iconLabel.classList.toggle("fa-pause");
}

// Functions
function playAudio(e) {
  const audioType = e.id;
  const iconLabel = e.parentElement.childNodes[3].childNodes[1];
  iconLabel.classList.toggle("fa-play");
  iconLabel.classList.toggle("fa-pause");
  if(e.checked) {
    switch (audioType) {
      case "pool-audio-btn":
        poolAudio.play();
        break;
      case "college-audio-btn":
        collegeAudio.play();
        break;
      case "health-audio-btn":
        healthAudio.play();
        break;
      case "single-story-audio-btn":
        singleStoryAudio.play();
        break;
      case "history-audio-btn":
        historyAudio.play();
        break;
    }
  } else {
    switch (audioType) {
      case "pool-audio-btn":
        poolAudio.pause();
        break;
      case "college-audio-btn":
        collegeAudio.pause();
        break;
      case "health-audio-btn":
        healthAudio.pause();
        break;
      case "single-story-audio-btn":
        singleStoryAudio.pause();
        break;
      case "history-audio-btn":
        historyAudio.pause();
        break;
    }
  }
}

function scrollToDiv(divClass) {
  $('html,body').animate({
    scrollTop: $("."+divClass).offset().top
 });
}
