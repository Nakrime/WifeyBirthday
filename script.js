var x = 1;
function move(){
  x = x-5;
  document.getElementById('about-1').style.backgroundPositionX = x + "px";
}
setInterval(move, 50);

function ClickNo()
{
  var b = document.getElementById("NoButton");
  b.parentNode.parentNode.NoderemoveChild(b.parentNode);
}
