document.addEventListener('DOMContentLoaded', function(e) {
  var canvas = document.getElementById('canvas2');
  var context = canvas.getContext('2d');


// red box
  context.fillStyle = 'rgb(255, 0, 0)';
  context.fillRect(
    50, // x coord
    50, // y coord
    100, // width
    100); // height

  context.save();
// ******************************

  context.translate(100, 100);
  context.rotate(.5);
  context.scale(.5, .5);

// blue box

  context.fillStyle = 'rgba(0, 0, 500, 0.5)';
  context.fillRect(80, 80, 100, 100);

// *******************************

  context.restore();

// clear box

  context.clearRect(
    115, 115, 20, 20);

//  green outline

  context.strokeStyle = 'rgb(51, 153, 0)';
  context.lineWidth = 6;
  context.strokeRect(115, 115, 20, 20);

  var x = 0, y = 0, frame;

  var draw = function() {
    if (x <= canvas.width) {
      context.clearRect(300, 0, 600, 400);
      context.strokeStyle = 'rgb(139, 0, 0)';
      context.lineWidth = 8;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(x += 10, y+= 10);
      context.stroke();
    }

    else {
      clearInterval(frame);
      document.getElementById('result').innerText = 'Animation Complete';
    }
  };

  frame = setInterval(function() {
    draw();
  }, 25);

});
