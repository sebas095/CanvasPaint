// Run App
$(document).ready(start);

let draw;
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function start() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Events
  $('#canvas').mousedown(press);
  $('#canvas').mousemove(paint);
  $('#canvas').mouseup(leave);

  function press(event) {
    draw = true;
    context.moveTo(event.pageX, event.pageY);
  }

  function paint(event) {
    if (draw) {
      context.beginPath();
      context.arc(event.pageX, event.pageY, 10, 0, 2 * Math.PI);
      context.fill();
    }
  }

  function leave(event) {
    draw = false;
  }
}
