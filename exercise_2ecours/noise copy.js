var inc = 1; //velocity
var density = 5; //size of rect

var increment = 5;
var size= 100;
var limit= 500;

var znoise = 0.0009;

function setup() {
	createCanvas (windowWidth, windowHeight);
	noStroke();
}

function draw() {
	var xnoise = 0.0;
	var ynoise = 0.0;

	for (var y = 0; y < height; y += density) {
		for (var x = 0; x < width; x += density){
			var n = noise(xnoise, ynoise, znoise) * 400;
			fill(255, 160, n);
			rect(x, y, density, density);
			xnoise += inc;

		}

		xnoise = 0;
		ynoise+= inc;
	}
	znoise += inc;

	if (size >= limit) 
		increment *= -1;
	else if (size<0) 
		increment *= -1;

	 size += increment;
	 ellipse (width/2, height/2, size, size);
}	
