// expose.js

var select;
var image;
var audio;
var sound;
var soundImage;
function change(){
  if (select.value === "air-horn"){
    image.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }else if (select.value === "car-horn"){
    image.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }else if (select.value === "party-horn"){
    image.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}
function changeAudio(){
  if (sound.value == 0){
    soundImage.src = "assets/icons/volume-level-0.svg";
    sound.volume = (sound.value / 100);
  }else if (sound.value <= 32){
    soundImage.src = "assets/icons/volume-level-1.svg";
    sound.volume = (sound.value / 100);
  }else if (sound.value <= 66){
    soundImage.src = "assets/icons/volume-level-2.svg";
    sound.volume = (sound.value / 100);
  }else{
    soundImage.src = "assets/icons/volume-level-3.svg";
    sound.volume = (sound.value / 100);
  }
}
window.addEventListener('DOMContentLoaded', init);

function init() {
  select = document.getElementById("horn-select");
  image = document.querySelector("header + img");
  audio = document.querySelector("audio");
  sound = document.getElementById('volume');
  sound.volume = 0.5;
  soundImage = document.querySelector("div > img");
  console.log(soundImage);
  select.addEventListener('change', change);
  sound.addEventListener('input', changeAudio);
}