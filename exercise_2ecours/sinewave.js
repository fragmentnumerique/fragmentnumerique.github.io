var angleInc = 0.0001;
var inc = 0.02;
var density = 8;
var znoise = 0.0002;

function setup ()
{
	createCanvas (windowWidth, windowHeight);
	noStroke();
}





function draw(){

angleInc += 0.0002;
var scale = 80;
var offset = height/2;
var angle= 5;

	var xnoise = 0.0;
	var ynoise = 0.0;


for (var y = 0; y < height; y += density) {
	for (var x = 0; x < width; x += density){
		var n = noise(xnoise, ynoise, znoise) * 255;
		fill(30,0,n,30);
		rect(x, y, density, density);
		xnoise += inc;

}

xnoise = 0;
ynoise+= inc;
}
znoise += inc;



	for (var x = 0; x <= width; x += 8){
		var y = offset + (tan(angle) * scale);
		fill (0,0,0,20);
		ellipse(x, y, 30, 100);
		angle+=angleInc;

	}
	for (var x = 0; x <= width; x += 8){
		var y = offset + (sin(angle) * scale);
		fill (0,70,220,70);
		ellipse(x, y, 50, random(50));
		angle+=angleInc;

	}
	for (var x = 0; x <= width; x += 8){
		var y = offset + (cos(angle) * scale);
		fill (0,90,180,40);
		ellipse(x, y, random(10,20), 50);
		angle+=angleInc;

	}

	rect(mouseX, mouseY, 50, 50);


}