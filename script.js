var x = 1;
function move(){
  x = x-5;
  document.getElementById('about-1').style.backgroundPositionX = x + "px";
}
setInterval(move, 50);

function ClickNo()
{
  var a = document.getElementById("YesButton");
  var b = document.getElementById("NoButton");
  b.style.width = b.style.width - 50 + 'px'
  b.style.height = b.style.height - 50 + 'px'
  a.style.width = a.style.width + 50 + 'px'
  a.style.height = a.style.height + 50 + 'px'
}
