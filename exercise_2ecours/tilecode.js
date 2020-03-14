var tileCount= 20;

var r;
var g;
var b;

function setup () {
	createCanvas (windowWidth, windowHeight)
	frameRate();
	//noLoop();
}

function draw() {
	//background(40);
	noStroke();
	r = 2;
	g = 2;
	b = 255;

	for(var j = 0; j < tileCount; j++){
		for(var i = 0; i < tileCount; i++){

			var x = i * 20;
			var y = j * 20;

			//c = color(random(0,r), random(0,g), random(0,b));

			fill(random(0, 255));

			rect(x, y, 40, 40);

		}
	}
	
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}