// Selectors
const scrollDownButton = document.querySelector(".hero-btn-wrapper");
const audioButtons = document.querySelectorAll(".audio-btn");

// Variables
const poolAudio = new Audio("pool_audio.mp3");
poolAudio.oncanplay = function() {
  if (document.querySelector("#pool-audio-btn").checked) this.play();
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
    }
  } else {
    switch (audioType) {
      case "pool-audio-btn":
        poolAudio.pause();
        break;
      default:

    }
  }
}

function scrollToDiv(divClass) {
  $('html,body').animate({
    scrollTop: $("."+divClass).offset().top
 });
}
