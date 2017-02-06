var w = 1280;
var h = 620;
var r = 20;
function setup() {
	w= w/2;
	h=h/2;

  createCanvas(w,h);
  
}
var ball={
	x: 300,
	y: 200,
	xspeed: 4,
	yspeed: -3
};

function draw() {
	background(0);
	stroke('red');
	strokeWeight(4);
	rect(0,0,w,h);
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(ball.x,ball.y,2*r,2*r);
	if ((ball.x+r) > w || (ball.x-r) < 0){
		ball.xspeed = ball.xspeed * (-1);
	}

	if ((ball.y+r) > h || (ball.y-r) < 0 ){
		ball.yspeed = ball.yspeed * (-1);
	}
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
	}
