var x = 1;

function move(){
  x++;
  document.getElementById('about-1').style.backgroundPositionX = x + "px";
}

setInterval(move, 50);
