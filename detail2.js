let cTime = 0;
let sTime = 0;
let rTime = 0;
let stopTime = 14000;
let startTime = 5000;
let printTime = 13000;
let state = 0;

let trebleClef, bassClef;
let video;
let posenet;
let poses = [];
let pointsCollection = [];

let ellweight = 54.4;
let ellheight = 46.8;

let num;


// 0 resting
// 1 prepare
// 2 record
// 3 print

function preload() {
	trebleClef = loadImage('trebleClef.svg');
	bassClef = loadImage('bassClef.svg');
}

function modelReady() {
	console.log("postNet ready");
}

function poseResults(results) {
	poses = results;
}

function setup() {
	frameRate(10);
	num = 0;
	createCanvas(1900, 1080);
	video = createCapture(VIDEO);
	video.size(1900, 1080);
	video.hide();
	posenet = ml5.poseNet(video, {
		flipHorizontal: true,
	}, modelReady);
	posenet.on("pose", poseResults);

    
    
}

function draw() {
	background(255);
	strokeWeight(3);
	
	bars(180, 260, 1540, 200, 5);
	bars(180, 620, 1540, 200, 5);
	line(180, 260, 180, 820);
	line(180 + 1540, 260, 180 + 1540, 820);
	bars(180, 260, 1540, 200, 5);
	bars(180, 620, 1540, 200, 5);
	line(180, 260, 180, 820);
	line(180 + 1540, 260, 180 + 1540, 820);
	//image(video, 40, 80);
	// do not show the video
	//background(100);

	// setup the drawing pen

	image(trebleClef, 200, 260, 90, 190);
	image(bassClef, 200, 650, 100, 190);
	stroke(0);
	fill(0);
	strokeWeight(1);
	textSize(44);
	text("No." + num + ' dancer', 180, 240);
	cTime = millis();
	if (cTime - sTime > startTime && state == 1) {
		console.log("start");
		state = 2;
		rTime = cTime;
	}
	if (cTime - sTime > printTime && state == 2) {
		saveFrames(String(num), 'png', 1, 1);
		num++;
		state = 3;
		// print & reset
	}
	if (cTime - sTime > stopTime && state == 3) {
		console.log("stop");
		state = 0;
	}
	if (poses.length < 0) {
		pointsCollection = [];
		state == 0
	}
	if (poses.length > 0) {
		let person = poses[0].pose;
		if (state == 0) {
			pointsCollection = []
			rTime = cTime;
			//console.log("stopped");
		} else if (state == 1) {
			let number = int((6000 - (cTime - rTime)) / 1000);
			if (number < 6 || number > 0) {
				textSize(320);
				text(number, 800, 600);
			}
			//console.log("prepare");
		} else if (state == 2) {
			//console.log("record");
			if (cTime - rTime > 2000) {
				pointsCollection.push([
					person.keypoints[0].position,
					// person.keypoints[7].position,
					//person.keypoints[8].position,
					person.keypoints[9].position,
					person.keypoints[10].position,
					person.keypoints[13].position,
					person.keypoints[14].position,
					// person.keypoints[15].position,
					// person.keypoints[16].position
				])
				//save points
				console.log("save points");
				rTime = cTime;
			}
		} else if (state == 3) {
			if (cTime - rTime > 2000) {
				pointsCollection.push([
					person.keypoints[0].position,//NOSE
					//person.keypoints[7].position//leftElbow
					//person.keypoints[8].position,//rightElbow
					person.keypoints[9].position,//leftWrist
					person.keypoints[10].position,//rightWrist
					person.keypoints[13].position,//leftKnee
					person.keypoints[14].position,//RIGHTKNEE
					// person.keypoints[15].position,//leftAnkle
					// person.keypoints[16].position//RIGHTANKLE
				])
				//save points
				console.log("save points");
				rTime = cTime;
			}
		}
		
		if (poses.length > 0) {
			let person = poses[0].pose;
			strokeWeight(0);
			fill(0, 60);
			person.keypoints[0].position.y = int(map(person.keypoints[0].position.y,0,1080,0,11));
			person.keypoints[0].position.y = map(person.keypoints[0].position.y,0,11,235,508);
			push();
			translate(person.keypoints[0].position.x, person.keypoints[0].position.y);
			rotate(-9.8);
			ellipse(0, 0, ellweight, ellheight);
			pop();
			// push();
			// translate(person.keypoints[7].position.x, person.keypoints[7].position.y);
			// rotate(-9.8);
			// ellipse(0,0, ellweight, ellheight);
			// pop();
			//push();
			//translate(person.keypoints[8].position.x, person.keypoints[8].position.y);
			//rotate(-9.8);
			//ellipse(0,0, ellweight, ellheight);
			//pop();
			person.keypoints[9].position.y = int(map(person.keypoints[9].position.y,0,1080,0,11));
			person.keypoints[9].position.y = map(person.keypoints[9].position.y,0,11,235,508);
			push();
			translate(person.keypoints[9].position.x, person.keypoints[9].position.y);
			rotate(-9.8);
			ellipse(0, 0, ellweight, ellheight);
			pop();
            
			person.keypoints[10].position.y = int(map(person.keypoints[10].position.y,0,1080,0,11));
			person.keypoints[10].position.y = map(person.keypoints[10].position.y,0,11,235,508);
			push();
			translate(person.keypoints[10].position.x, person.keypoints[10].position.y);
			rotate(-9.8);
			ellipse(0, 0, ellweight, ellheight);
			pop();
			
			person.keypoints[13].position.y = int(map(person.keypoints[13].position.y,540,1280,0,11));
			person.keypoints[13].position.y = map(person.keypoints[13].position.y,0,11,595,868);
			push();
			translate(person.keypoints[13].position.x, person.keypoints[13].position.y);
			rotate(-9.8);
			ellipse(0, 0, ellweight, ellheight);
			pop();
            
			person.keypoints[14].position.y = int(map(person.keypoints[14].position.y,540,1280,0,11));
			person.keypoints[14].position.y = map(person.keypoints[14].position.y,0,11,595,868);
			push();
			translate(person.keypoints[14].position.x, person.keypoints[14].position.y);
			rotate(-9.8);
			ellipse(0, 0, ellweight, ellheight);
			pop();
		}
		for (let i = 0; i < pointsCollection.length; i++) {
			for (let j = 0; j < pointsCollection[i].length; j++) {
				
					stroke(0);
					strokeWeight(2.5);
					line(pointsCollection[i][j].x + ellweight / 2 - 1.2, pointsCollection[i][j].y, pointsCollection[i][j].x + ellweight / 2, pointsCollection[i][j].y - 80);

					fill(0);
					strokeWeight(0);
					push();
					translate(pointsCollection[i][j].x, pointsCollection[i][j].y);
					rotate(-9.8);
					ellipse(0, 0, ellweight, ellheight);
					pop();
				
			}
		}
	}
}

function mousePressed() {
	if (state == 0) {
		sTime = cTime;
		state = 1;
	}
}

function bars(x, y, w, h, n) {
	stroke(0, 150)
	strokeWeight(3);
	let dh = h / (n - 1)
	for (let i = 0; i < n; i++) {
		line(x, y + dh * i, x + w, y + dh * i)
	}
	//line(x, y, x, y + 0);
	//line(x + w, y, x + w, y + 120);
	//line(x, y + h, x, height - y - h);
	//line(width - x, y + h, width - x, height - y - h);
}
//line(x, y, x, y + 0);
//line(x + w, y, x + w, y + 120);
//line(x, y + h, x, height - y - h);
//line(width - x, y + h, width - x, height - y - h);