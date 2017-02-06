var w = 600;
var h = 600;
var stars = [];
var speed;
function Star(){

	this.x = random(-w, w);
	this.y = random(-h, h);
	this.z = random(w);
	this.pz = this.z;



	this.show = function() {
		fill(255);
		noStroke();
		this.sx = map(this.x/this.z,0,1,0,w);
		this.sy = map(this.y/this.z,0,1,0,h);
		var r = map(this.z,0,w,12,0); 
		ellipse(this.sx,this.sy,r,r);
		this.px = map(this.x/this.pz,0,1,0,w);
		this.py = map(this.y/this.pz,0,1,0,h);
		this.pz = this.z;
		stroke(255);

		line(this.px,this.py,this.sx,this.sy)

	}

	this.update = function() {
		this.z = this.z - speed;
		if (this.z <1){
			this.x = random(-w, w);
			this.y = random(-h, h);
			this.z = w;
			this.pz = this.z;

		}
	}

}




function setup() {
   
  createCanvas(w,h);

  for (var i = 0 ; i< 800; i++){
  	stars[i] = new Star();

  }
  
}


function draw() {
    
	speed = map(mouseX,0,w,0,30);
	background(0);
	translate(w/2,h/2);
  for (var i = 0 ; i< stars.length; i++){

  	stars[i].update();
    stars[i].show();

    
  }
  
  
  //print(stars.length);
  //stars[10].show();
	}
