var song = document.getElementById("song");
var icon = document.getElementById("icon");

 icon.onclick = function () {
   if(song.paused){
     song.play();
     icon.src= "Assets/img/pause.png";
   }
   else{
     song.pause();
     icon.src= "Assets/img/play.png";
   }
}