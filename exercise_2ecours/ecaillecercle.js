var tileCount= 50;

var r;
var g;
var b;

function setup () {
	createCanvas (windowWidth, windowHeight)
	//noLoop();
	frameRate(2);
}

function draw() {
	background(170);
	push();
	noStroke();
	r = 170;
	g = 10;
	b = 20;

	for(var j = 0; j < 50; j++){
		for(var i = 0; i < 50; i++){

			var x = i * 50;
			var y = j * 50;

			c = color(random(r), random(g), random(b));

			fill(c);

			ellipse(x, y, 100, 100);

		}
	}
	pop();
	
	cercle();
	cercle2();
	cercle3();
	
}

function cercle (){

	noStroke();
	fill(200,0,0,40);
	ellipseMode(CENTER);
	ellipse(width/2,height/2 , 500, 500);
}

function cercle2() {
	
	noStroke();
	fill(200,0,0,40);
	ellipseMode(CENTER);
	ellipse(width/2,height/2 , 1000, 1000);

}

function cercle3() {
	noStroke();
	fill(100,0,180,40);
	ellipseMode(CENTER);
	ellipse(width/2,height/2 , 1500, 1500);

}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}