var x = 1;
function move(){
  x = x-5;
  document.getElementById('about-1').style.backgroundPositionX = x + "px";
}
setInterval(move, 50);

function ClickNo()
{
  var b = document.getElementById("NoButton");
  var i = Math.floor(Math.random()*500)+1;
  var j = Math.floor(Math.random()*500)+1;
  b.style.left = i+"px";
  b.style.top = j+"px";
}
