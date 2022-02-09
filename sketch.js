let portrait = [];
let lefteye = [];
let righteye = [];
let nose = [];
let mouth = [];
let bg = [];
let table = [];
let coffee = [];
let alterEgo = [];
let animalFriend = [];
let imgWidth, imgHeight;
let randomPortrait = 0;
let randomLefteye = 0;
let randomRighteye = 0;
let randomNose = 0;
let randomMouth = 0;
let randomCoffee = 0;
let randomAlterEgo = 0;
// let randomAnimalFriend = 0;
// let randomAnimalFriendX = 0;
// let randomAnimalFriendY = 0;
let randomBg = 0;

let x = 0;
let y = 0;
let xOff = 0.0;
let yOff = 0.0;
let xWalk, yWalk;

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// imgWidth = map(portrait[0].width,0,portrait[0].width,0,width);
	// imgHeight = map(portrait[0].width,0,portrait[0].width,0,width);
	if (portrait[0].width > width) {
		imgWidth = map(portrait[randomBg].width, 0, portrait[randomBg].width, 0, width);
		imgHeight = map(portrait[randomBg].width, 0, portrait[randomBg].width, 0, width);
	}
	else {
		imgWidth = portrait[randomBg].width;
		imgHeight = portrait[randomBg].height;
	}

	randomPortrait = floor(random(76));
	randomLefteye = floor(random(54));
	randomRighteye = floor(random(49));
	randomNose = floor(random(75));
	randomMouth = floor(random(70));
	randomCoffee = floor(random(5));
	randomAlterEgo = floor(random(11))
	randomBg = floor(random(6));

	xWalk = map(noise(xOff), 0, 1, -imgWidth / 5, imgWidth / 5);
	yWalk = map(noise(yOff), 0, 1, -imgHeight / 5, imgHeight / 5);
}


function preload() {
	for (let i = 0; i < 76; i++) {
		portrait[i] = loadImage('img/portrait-pfo-' + i + ".png");
	}
	for (let i = 0; i < 54; i++) {
		lefteye[i] = loadImage('img/lefteye-' + i + ".png");
	}
	for (let i = 0; i < 49; i++) {
		righteye[i] = loadImage('img/righteye-' + i + ".png");
	}
	for (let i = 0; i < 75; i++) {
		nose[i] = loadImage('img/nose-' + i + ".png");
	}
	for (let i = 0; i < 70; i++) {
		mouth[i] = loadImage('img/mouth-' + i + ".png");
	}
	for (let i = 0; i < 5; i++) {
		coffee[i] = loadImage('img/coffee-' + i + ".png");
	}
	for (let i = 0; i < 11; i++) {
		alterEgo[i] = loadImage('img/alter-ego-' + i + ".png");
	}
	for (let i = 0; i < 1; i++) {
		table[i] = loadImage('img/table-' + i + ".png");
	}
}

function draw() {
	background(255);
	drawAlterEgo();
	drawStillife();
	// console.log(portrait[randomPortrait], lefteye[randomLefteye], righteye[randomRighteye], nose[randomNose], mouth[randomMouth], coffee[randomCoffee], alterEgo[randomAlterEgo]);
	console.log(randomPortrait, randomLefteye, randomRighteye, randomNose, randomMouth, randomCoffee, randomAlterEgo);
}
	function keyPressed() {
		randomPortrait = floor(random(76));
		randomLefteye = floor(random(54));
		randomRighteye = floor(random(49));
		randomNose = floor(random(75));
		randomMouth = floor(random(70));
		randomCoffee = floor(random(5));
		randomAlterEgo = floor(random(11));

		xOff = xOff + 0.5;
		yOff = yOff + 1;
		xWalk = map(noise(xOff), 0, 1, -imgWidth / 10, imgWidth / 10);
		yWalk = map(noise(yOff), 0, 1, -imgHeight / 10, imgHeight / 10);
	}

	function touchStarted() {
		randomPortrait = floor(random(76));
		randomLefteye = floor(random(54));
		randomRighteye = floor(random(49));
		randomNose = floor(random(75));
		randomMouth = floor(random(70));
		randomCoffee = floor(random(5));
		randomAlterEgo = floor(random(11));
		randomBg = floor(random(6))

		xOff = xOff + 0.5;
		yOff = yOff + 1;
		xWalk = map(noise(xOff), 0, 1, -imgWidth / 10, imgWidth / 10);
		yWalk = map(noise(yOff), 0, 1, -imgHeight / 10, imgHeight / 10);
	}

	function drawStillife() {
		translate(xWalk, yWalk);
		image(table[0], imgWidth * .025, imgHeight * .025, map(table[0].width, 0, table[0].width, 0, imgWidth), map(table[0].height, 0, table[0].height, 0, imgHeight));
		image(coffee[randomCoffee], imgWidth * .5, imgHeight * .3, map(coffee[0].width, 0, coffee[0].width, 0, imgWidth / 9), map(coffee[0].height, 0, coffee[0].height, 0, imgHeight / 8));
		if (randomPortrait <= 68) {
			push();
			scale(HALF_PI);
			translate(-imgWidth / 2, imgHeight / 8);
			image(portrait[randomPortrait], 0, 0, imgWidth, imgHeight);
			image(nose[randomNose], imgWidth * .7525, imgHeight * .10, imgWidth * .02, imgHeight * .03);
			image(lefteye[randomLefteye], imgWidth * .725, imgHeight * .09, imgWidth * .03, imgHeight * .02);
			image(righteye[randomRighteye], imgWidth * .77, imgHeight * .09, imgWidth * .03, imgHeight * .02);
			image(mouth[randomMouth], imgWidth * .74, imgHeight * .13, imgWidth * .044, imgHeight * .022);
			pop();
		}
		else {
			image(portrait[randomPortrait], 0, 0, imgWidth, imgHeight);
			image(nose[randomNose], imgWidth * .7525, imgHeight * .10, imgWidth * .02, imgHeight * .03);
			image(lefteye[randomLefteye], imgWidth * .725, imgHeight * .09, imgWidth * .03, imgHeight * .02);
			image(righteye[randomRighteye], imgWidth * .77, imgHeight * .09, imgWidth * .03, imgHeight * .02);
			image(mouth[randomMouth], imgWidth * .74, imgHeight * .125, imgWidth * .044, imgHeight * .022);
		}
	}

	function drawAlterEgo() {
		let i = 0;
		let randomAlterEgo = floor(11);
		for (y = 0; y < height; y += 425) {
			for (x = 0; x < width; x += 425) {
				image(nose[i % randomNose], x + 165, y + 175);
				image(lefteye[randomLefteye], x + 110, y + 135);
				image(righteye[randomRighteye], x + 200, y + 125);
				image(mouth[randomMouth], x + 145, y + 243);
				image(alterEgo[i % alterEgo.length], x, y, map(alterEgo.width, 0, imgWidth / 4), map(alterEgo.height, 0, imgHeight / 4));
				i++
			}
		}
	}