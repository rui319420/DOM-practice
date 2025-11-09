const elem = document.getElementById('elem');
elem.addEventListener('mousemove', runEvent);

const block = document.getElementById('elem')

document.block.style.backgroundColor = '#f4f4f4'

function runEvent(e) {
  console.log(e.offsetX, e.offsetY);
  document.getElementById('elem').style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
};

