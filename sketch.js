var ball={
  x:20,
  y:140,
  radius:20,
  xspeed:0,
  yspeed:0,
  colour:"red"

}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius)
  fill (ball.colour)
  ball.xspeed=4
  ball.x=ball.x+ball.xspeed
}