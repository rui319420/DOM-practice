const elem = document.getElementById('elem');
elem.addEventListener('mousemove', runEvent);

// イベントが発生したときの処理
function runEvent(e) {
  console.log(e.offsetX, e.offsetY);
  document.getElementById('elem').style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
};

