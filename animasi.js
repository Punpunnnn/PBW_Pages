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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenelements=document.querySelectorAll('.praktikum1,.praktikum2,.judul1,.judul2');
hiddenelements.forEach((el) => observer.observe(el));