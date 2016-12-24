// Run App
$(start);

let draw;
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let radius = 10;
let minRadius = 2;
let maxRadius = 30;

function pincelSize() {
  $('#increase').click(() => {
    radius += 2;
    if (radius >= maxRadius) {
      radius = maxRadius;
    }
    $('#pincelval').text(radius);
  });

  $('#decrease').click(() => {
    radius -= 2;
    if (radius <= minRadius) {
      radius = minRadius;
    }
    $('#pincelval').text(radius);
  });
}

function start() {
  canvas.width = window.innerWidth - 15;
  canvas.height = window.innerHeight;
  pincelSize();
  save();

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
      context.lineWidth = radius * 2;
      context.lineTo(event.pageX, event.pageY);
      context.stroke();

      context.beginPath();
      context.arc(event.pageX, event.pageY, radius, 0, 2 * Math.PI);
      context.fill();

      context.beginPath();
      context.moveTo(event.pageX, event.pageY);
    }
  }

  function leave() {
    draw = false;
  }

  function save() {
    $('#save').click(() => {
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href = image;
    });
  }
}
