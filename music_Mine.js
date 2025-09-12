
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let firstRun = true
let y;

// ARRAYS

  let yPosArray = [300,200,600,400,300,700,100,300,800,400,500];
  let xPosArray = [0,100,200,300,400,500,600,700,800,900,1000];

  // a=y coordinates, b= x coordinates
  let aPosArray = [150,400,250,350,50,300,200,100,150,400,250,350,50,300,200,100,550,600,750,500,800,650,900,550,450,940,850,600];
  let bPosArray = [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,50,100,150,200,250,300,350,400,450,500,];

  //i=y
  let IPosArray = [300,200,600,400];
  let JPosArray = [400,100,500,300];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(49, 21, 173);

let seconds = counter/60
rectMode(CENTER)


//  image coding
if (firstRun) { 
  myImage = loadImage ('gradient.jpg')
  myImage2 = loadImage ('frontt copy.png')
  myImage3 = loadImage ('stars.png')
  myImage4 = loadImage ('aura1.png')
  myImage5 = loadImage ('clouds.png')
  myImage6 = loadImage ('darkgradient.png')
  myImage7 = loadImage ('darkergradient.png')
  myImage8 = loadImage ('aura2.png')

}


//intro
if (seconds > 0 && seconds <68.49999999999) {

image(myImage, 0, 0)//background gradient
image(myImage5,bass/2-90,-90)//clouds


for(let i = 0; i < IPosArray.length; i++){ // aura

drawingContext.shadowBlur = 150
drawingContext.shadowcolor = color(208, 172, 175)
image(myImage4, 0, IPosArray[i])

// drawingContext.shadowBlur = 150
// drawingContext.shadowcolor = color(208, 172, 175)
// image(myImage4, 225, IPosArray[i])

drawingContext.shadowBlur = 150
drawingContext.shadowcolor = color(208, 172, 175)
image(myImage4, 325, IPosArray[i])

drawingContext.shadowBlur = 150
drawingContext.shadowcolor = color(208, 172, 175)
image(myImage8, 625, JPosArray[i])

drawingContext.shadowBlur = 150
drawingContext.shadowcolor = color(208, 172, 175)
image(myImage8, 625, JPosArray[i])

drawingContext.shadowBlur = 150
drawingContext.shadowcolor = color(208, 172, 175)
image(myImage8, 625, JPosArray[i])


IPosArray[i] --;
  if(IPosArray[i] <0){
    IPosArray[i] = 600
  }

}


for(let i = 0; i < aPosArray.length; i++){ // smaller pink cicles
  strokeWeight(0);

  fill(224, 213, 167);
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(224, 213, 167);
  ellipse(bPosArray[i], aPosArray[i], bass/1.52); 

  fill (208, 172, 175);
  drawingContext.shadowBlur = 150;
  drawingContext.shadowcolor = color(208, 172, 175);
   ellipse(bPosArray[i], aPosArray[i], bass/2);

  fill (237, 97, 101);
  drawingContext.shadowBlur = 150;
  drawingContext.shadowcolor = color(237, 97, 101);
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
  drawingContext.shadowcolor = color(234, 160, 147);
  ellipse(xPosArray[i], yPosArray[i], vocal/1.5);

  fill (243, 115, 108);//
  drawingContext.shadowBlur = 100;
  drawingContext.shadowcolor = color(243, 115, 108);
  ellipse(xPosArray[i], yPosArray[i], vocal/2);

  yPosArray[i] --;
  if(yPosArray[i] < -50){
    yPosArray[i] = height+50
  }
}

image(myImage2,0,0)// front hills 
}


//chorus
if (seconds > 68.5 && seconds <174); {


image(myImage6,bass/8,0);//dark gradient
image(myImage3,bass/8-30,0);//stars

for(let i = 0; i < aPosArray.length; i++){ // smaller pink cicles
  strokeWeight(0);

  fill(186, 69, 112);//hotpink
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(186, 69, 112);
  ellipse(bPosArray[i], aPosArray[i], bass/1.5); 

  fill (219, 134, 7);//orange
  drawingContext.shadowBlur = 150;
  drawingContext.shadowcolor = color(219, 134, 7);
  ellipse(bPosArray[i], aPosArray[i], bass/2);

  fill (250, 229, 92);//yellow
  drawingContext.shadowBlur = 150;
  drawingContext.shadowcolor = color(250, 229, 92);
  ellipse(bPosArray[i], aPosArray[i], bass/3);

  aPosArray[i] --;
  if(aPosArray[i] < -50){
    aPosArray[i] = height+50;
  }
}

for(let i = 0; i < yPosArray.length; i++){ //orange, green & blue circles adjusting to the drums
  strokeWeight(0);

  fill(194, 89, 182);
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(194, 89, 182);

  ellipse(xPosArray[i], yPosArray[i], vocal*2); 

  fill (92, 78, 163);
  drawingContext.shadowBlur = 150;
  drawingContext.shadowcolor = color(92, 78, 163);

  ellipse(xPosArray[i], yPosArray[i], vocal);

  fill (125, 169, 209);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowcolor = color(125, 169, 209);

  ellipse(xPosArray[i], yPosArray[i], vocal/2);

  yPosArray[i] --;
  if(yPosArray[i] < -50){
    yPosArray[i] = height+50
  }
}

image(myImage2,0,0);// front hills 


}


// outro
if (seconds > 174 && seconds <227.9999999999) {
image(myImage7,0,0)// front hills 
var bassMap = map(bass,40,100,200,90);

for (var ii = 1; ii <= 3; ii++){ 
  var yStep = ii * 130
   for (var i = 3; i <= 8; i ++) {

     ellipse(85 * i, yStep, bassMap);
    [i]
   }

}

// if (seconds > 228 && seconds <228) {




// }
}

// textFont(font);
textSize(vocal);
textStyle(BOLD);
fill(208, 171, 159);
text(words, 50, 500);


}