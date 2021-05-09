// Selectors
const scrollDownButton = document.querySelector(".hero-btn-wrapper");
const audioButtons = document.querySelectorAll(".audio-btn");

// Variables
const poolAudio = new Audio("pool_audio.mp3");
poolAudio.oncanplay = function() {
  if (document.querySelector("#pool-audio-btn").checked) this.play();
}
const collegeAudio = new Audio("college_audio.mp3");
collegeAudio.oncanplay = function() {
  if (document.querySelector("#college-audio-btn").checked) this.play();
}
const healthAudio = new Audio("health_audio.mp3");
healthAudio.oncanplay = function() {
  if (document.querySelector("#health-audio-btn").checked) this.play();
}
const singleStoryAudio = new Audio("single_story_audio.mp3");
singleStoryAudio.oncanplay = function() {
  if (document.querySelector("#single-story-audio-btn").checked) this.play();
}
const historyAudio = new Audio("history_audio.mp3");
historyAudio.oncanplay = function() {
  if (document.querySelector("#history-audio-btn").checked) this.play();
}

// Functions
function playAudio(e) {
  const audioType = e.id;
  console.log(e);
  const iconLabel = e.parentElement.childNodes[3].childNodes[1];
  console.log(iconLabel);
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
