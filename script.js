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
  b.parentNode.parentNode.removeChild(b.parentNode);
  a.style.width = '200px'
  a.style.height = '100px'
}

function ClickYes() {
        var audio = document.getElementById("audio");
        audio.play();
}
