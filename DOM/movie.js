const box = document.getElementById('box');

box.style.backgroundColor = '#f4f4f4';


box.addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(e.offsetX, e.offsetY);
  
  document.getElementById('box').style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
};