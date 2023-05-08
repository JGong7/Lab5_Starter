// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth;
var list;
var select;
var button;
var text;
var voiceChoice;
var utterance;
var image;

function init() {
  button = document.querySelector("button");
  button.addEventListener("click", play);
  synth = window.speechSynthesis;
  select = document.getElementById("voice-select");
  utterance = new SpeechSynthesisUtterance();
  image = document.querySelector("img");
  synth.addEventListener('voiceschanged', () => {
    list = synth.getVoices();
    for (let i in list){
      let voice = list[i];
      let option = document.createElement("option");
      option.text = voice.name;
      option.value = i;
      select.add(option);
    }
  })
}

function play(){
  text = document.querySelector("textarea").value;
  voiceChoice = document.querySelector("select").value;
  utterance.voice = list[voiceChoice];
  utterance.text = text;
  synth.speak(utterance);
  utterance.onstart = () =>{
    image.src = "assets/images/smiling-open.png";
  }
  utterance.onend = () =>{
    image.src = "assets/images/smiling.png";
  }
}