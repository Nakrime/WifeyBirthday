var x = 1;
var bgImage = document.getElementById('about-1');

function move(){
  x++;
  bgImage.style.backgroundPositionX = x + "px";
}

setInterval(move, 50);
