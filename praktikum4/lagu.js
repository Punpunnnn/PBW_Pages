let citypop = document.querySelector(".citypop");
let audio = document.createElement("audio");
audio.src = "assets/pre.mp3"; /* Bisa diganti */
let phonk = document.querySelector(".phonk");
let audio2 = document.createElement("audio");
audio2.src = "assets/pre2.mp3"; /* Bisa diganti */
let pop = document.querySelector(".pop");
let audio3 = document.createElement("audio");
audio3.src = "assets/pre3.mp3"; /* Bisa diganti */

let full1 = document.createElement("audio");
full1.src = "assets/lagu1.mp3"; /* Bisa diganti */
let full2 = document.createElement("audio");
full2.src = "assets/lagu2.mp3"; /* Bisa diganti */
let full3 = document.createElement("audio");
full3.src = "assets/lagu3.mp3"; /* Bisa diganti */

document.body.appendChild(audio);
citypop.onmouseover = () => {
  audio.play();
}
citypop.onmouseout = () => {
    audio.pause();
}

document.body.appendChild(audio2);
phonk.onmouseover = () => {
  audio2.play();
}
phonk.onmouseout = () => {
    audio2.pause();
}

document.body.appendChild(audio3);
pop.onmouseover = () => {
  audio3.play();
}
pop.onmouseout = () => {
    audio3.pause();
}

var play1 = document.getElementById("play1");

 play1.onclick = function () {
   if(full1.paused){
     full1.play();
     full2.pause();
     full3.pause();
   }
   else{
     full1.pause();
   }
}
var play2 = document.getElementById("play2");

 play2.onclick = function () {
   if(full2.paused){
     full2.play();
     full3.pause();
     full1.pause();
   }
   else{
     full2.pause();
   }
}
var play3 = document.getElementById("play3");

 play3.onclick = function () {
   if(full3.paused){
     full3.play();
     full2.pause();
     full1.pause();
   }
   else{
     full3.pause();
   }
}