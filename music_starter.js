let firstRun = true
let y;
let yOffset= 0;

// ARRAYS
let yPosArray = [300,200,600,400,300,700,100,300,800,400,500];
let xPosArray = [0,100,200,300,400,500,600,700,800,900,1000];

let aPosArray = [150,400,250,350,50,300,200,100,150,400,250,350,50,300,200,100,550,600,750,500,800,650,900,550,450,940,850,600,200];
let bPosArray = [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,50,100,150,200,250,300,350,400,450,500,];

let IPosArray = [300,200,600,400];
let JPosArray = [400,100,500,300];


function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(255);

let seconds = counter/60
rectMode(CENTER)


// Image coding
if (firstRun) { 
  myImage1 = loadImage ('gradient.png');
  myImage2 = loadImage ('hills.png');
  myImage3 = loadImage ('stars.png');
  myImage4 = loadImage ('aura1.png');
  myImage5 = loadImage ('clouds.png');
  myImage6 = loadImage ('gradient2.png');
  myImage7 = loadImage ('gradient3.png');
  myImage8 = loadImage ('aura2.png');
  myImage9 = loadImage ('gradient4.png');
  myImage10 = loadImage ('gradient5.png');


  firstRun = false;
}


//Intro
if (seconds > 0 && seconds <68.4999999999) {

image(myImage1, 0, 0); // background gradient
image(myImage5,bass/2 - 90, -90); // clouds

// Aura1 movement
yOffset -= 1.5;

  if (yOffset <= -myImage4.height) {
    yOffset = 0;
  }


    for (let y = yOffset; y < height; y += myImage4.height) {
    image(myImage4, 20, y+100);
  }

    for (let y = yOffset; y < height; y += myImage4.height) {
    image(myImage4, 500, y+200);
  }

    for (let y = yOffset; y < height; y += myImage4.height) {
    image(myImage4, 330, y-200);
  }




yOffset -= 1.5;

  if (yOffset <= -myImage8.height) {
    yOffset = 0;
  }


    for (let y = yOffset; y < height; y += myImage4.height) {
    image(myImage8, 20, y+100);
  }

    for (let y = yOffset; y < height; y += myImage4.height) {
    image(myImage8, 500, y+200);
  }

    for (let y = yOffset; y < height; y += myImage4.height) {
    image(myImage8, 330, y-200);
  }


for(let i = 0; i < aPosArray.length; i++){ // smaller pink/cream cicles
  strokeWeight(0);

  fill(224, 213, 167);
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(224, 213, 167);
  ellipse(bPosArray[i], aPosArray[i], bass/1.52); 

  fill (208, 172, 175);
  drawingContext.shadowBlur = 150;
  drawingContext.shadowColor = color(208, 172, 175);
   ellipse(bPosArray[i], aPosArray[i], bass/2);

  fill (237, 97, 101);
  drawingContext.shadowBlur = 150;
  drawingContext.shadowColor = color(237, 97, 101);
  ellipse(bPosArray[i], aPosArray[i], bass/3);

  aPosArray[i] --;
  if(aPosArray[i] < -50){
    aPosArray[i] = height+50
  }
}

for(let i = 0; i < yPosArray.length; i++){ //orange, green & blue circles adjusting to the drums
  strokeWeight(0);

  fill(243, 177, 144);//orange
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(243, 177, 144);
  ellipse(xPosArray[i], yPosArray[i], vocal); 

  fill (234, 160, 147);//green
  drawingContext.shadowBlur = 150;
  drawingContext.shadowColor = color(234, 160, 147);
  ellipse(xPosArray[i], yPosArray[i], vocal/1.5);

  fill (243, 115, 108);//
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(243, 115, 108);
  ellipse(xPosArray[i], yPosArray[i], vocal/2);

  yPosArray[i] --;
  if(yPosArray[i] < -50){
    yPosArray[i] = height+50
  }
}

image(myImage2,0,0)// front hills 
}


//Chorus
if (seconds > 68.5 && seconds <173.49999999999) {


image(myImage6,0,0); // dark gradient
image(myImage3,bass/8-30,0); // stars
image(myImage5,bass/2 - 90, -90); // clouds

for(let i = 0; i < aPosArray.length; i++){ // smaller pink/purple cicles
  strokeWeight(0);

  fill(175, 137, 190); // light pruple
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(175, 137, 190);
  ellipse(bPosArray[i], aPosArray[i], bass/1.5); 

  fill (221, 129, 181); // pink
  drawingContext.shadowBlur = 150;
  drawingContext.shadowColor = color(221, 129, 181);
  ellipse(bPosArray[i], aPosArray[i], bass/2);

  fill (244, 160, 196); // light pink 
  drawingContext.shadowBlur = 150;
  drawingContext.shadowColor = color(244, 160, 196);
  ellipse(bPosArray[i], aPosArray[i], bass/3);

  aPosArray[i] --;
  if(aPosArray[i] < -50){
    aPosArray[i] = height+50;
  }
}

for(let i = 0; i < yPosArray.length; i++){ // blue/purple circles
  strokeWeight(0);

  fill(81, 77, 148);
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(81, 77, 148);
  ellipse(xPosArray[i], yPosArray[i], vocal*2); 

  fill (103, 105, 176);
  drawingContext.shadowBlur = 150;
  drawingContext.shadowColor = color(103, 105, 176);
  ellipse(xPosArray[i], yPosArray[i], vocal);

  fill (184, 200, 204);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(184, 200, 204);
  ellipse(xPosArray[i], yPosArray[i], vocal/2);

  yPosArray[i] --;
  if(yPosArray[i] < -50){
    yPosArray[i] = height+50
  }
}

image(myImage2,0,0);// front hills 


}


//Outro
if (seconds > 173.5 && seconds <191.9999999999) {
image(myImage9,0,0)// gradient4

strokeWeight(0)

fill(255, 221, 171);
ellipse(120, 135, drum, drum);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 221, 171);

fill(255, 209, 140);
ellipse(120,135, drum/1.5, drum/1.5);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 209, 140);

fill(255, 205, 130);
ellipse(120, 135, drum/4, drum/4);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 205, 130);



fill(255, 221, 171);
ellipse(840, 135, drum, drum);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 221, 171);

fill(255, 209, 140);
ellipse(840,135, drum/1.5, drum/1.5);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 209, 140);

fill(255, 205, 130);
ellipse(840, 135, drum/4, drum/4);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 205, 130);



fill(255, 221, 171);
ellipse(840, 405, drum, drum);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 221, 171);

fill(255, 209, 140);
ellipse(840,405, drum/1.5, drum/1.5);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 209, 140);

fill(255, 205, 130);
ellipse(840, 405, drum/4, drum/4);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 205, 130);



fill(255, 221, 171);
ellipse(840, 135, drum, drum);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 221, 171);

fill(255, 209, 140);
ellipse(840,135, drum/1.5, drum/1.5);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 209, 140);

fill(255, 205, 130);
ellipse(840, 135, drum/4, drum/4);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 205, 130);



fill(255, 221, 171);
ellipse(120, 405, drum, drum);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 221, 171);

fill(255, 209, 140);
ellipse(120,405, drum/1.5, drum/1.5);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 209, 140);

fill(255, 205, 130);
ellipse(120, 405, drum/4, drum/4);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 205, 130);


strokeWeight(3)
stroke(201, 14, 68);


var bassMap = map(bass,40,100,200,90);
fill(201, 66, 105)
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(201, 66, 105);

for (var ii = 1; ii <= 3; ii++){ 
  var yStep = ii * 130;
   for (var i = 3; i <= 8; i ++) {

     ellipse(85 * i, yStep, bassMap);
    [i]
   }

}
}


// Ending
if (seconds > 192 && seconds <228) {
image(myImage10,0,0) // gradient5

strokeWeight(0)

fill(255,115, 115)
ellipse(500,270,bass*6);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 125, 125);

fill(255,125, 125)
ellipse(500,270,bass*6);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 125, 125);

fill(255, 135, 135);
ellipse(500,270,bass*5);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 135, 135);

fill(255, 145, 145);
ellipse(500,270,bass*4);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 145, 145);

fill(255, 155, 155)
ellipse(500,270,bass*3);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 155, 155);

fill(255, 165, 165);
ellipse(500,270,bass*2);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 165, 165);

fill(255, 175, 175);
ellipse(500,270,bass);
drawingContext.shadowBlur = 200;
drawingContext.shadowColor = color(255, 175, 175);
}
}
