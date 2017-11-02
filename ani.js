var canvas = document.getElementById('ani');
var ctx = canvas.getContext("2d");
var bgImage = new Image();

var bgload = false;
bgImage.onload = function () {
  bgload = true;
};
bgImage.src = "bg.png";


//draw background image
var drawBackground = function() {
  ctx.drawImage(bgImage, 0, 0);
}

var ball = {
  x: 50,
  y: 50,
  dx: 0,
  dy: 0,
  radius: 10,
  color: "black",
  move: function() {
    this.x += this.dx;
    this.y += this.dy;
  },
  setSpeed: function(x, y) {
    this.dx = x;
    this.dy = y;
  },
  check: function() {
    if (this.x == 0 || this.x == 640) {
      this.dx = this.dx * (-1);
    }

    if (this.y == 0 || this.y == 480) {
      this.dy = this.dy * (-1);
    }
  }
};

ctx.drawBall = function() {
  this.beginPath();
  this.fillStyle = ball.color;
  this.ellipse(ball.x, ball.y, ball.radius, ball.radius,
     0, 0, 2 * Math.PI);
  this.fill();
};


ball.setSpeed(5, -1);

var drawAll = function() {
  if (bgload) {
    drawBackground();
  }

  ball.check();
  ball.move();
  ctx.drawBall();
};

var x= setInterval(drawAll, 30);
