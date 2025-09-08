
// vocal, drum, bass, and other are volumes ranging from 0 to 100
var size = 100;
var size1 = 75;
var size2 = 50;
let firstRun = true

var yPosArray = [300,200,600,400,300,700,100,300,800,400,500];
var wPosArray = [300,200,600,400,300,700,100,300,800,400,500];
var uPosArray = [300,200,600,400,300,700,100,300,800,400,500];
var y;
y = height;


function draw_one_frame(vocal, drum, bass, other) {
background(153, 225, 247);

rectMode(CENTER)
if (firstRun) {
  myImage = loadImage ('Print.jpg')
  myImage2 = loadImage ('frontt copy.png')
  firstRun = false;

}

image(myImage, 0, 0)

strokeWeight(0);
fill(237, 181, 130)
drawingContext.shadowBlur = 200
drawingContext.shadowColor = color(237, 181, 130)



ellipse(0, yPosArray [0], drum*3); 
ellipse(100, yPosArray [1], drum*3);
ellipse(200, yPosArray [2], drum*3); 
ellipse(300, yPosArray [3], drum*3);
ellipse(400, yPosArray [4], drum*3);
ellipse(500, yPosArray [5], drum*3);
ellipse(600, yPosArray [6], drum*3);
ellipse(700, yPosArray [7], drum*3);
ellipse(800, yPosArray [8], drum*3);
ellipse(900, yPosArray [9], drum*3);
ellipse(1000, yPosArray [10], drum*3);


yPosArray [0] --;
yPosArray [1] --;
yPosArray [2] --;
yPosArray [3] --;
yPosArray [4]--;
yPosArray [5] --;
yPosArray [6] --;
yPosArray [7] --;
yPosArray [8] --;
yPosArray [9] --;
yPosArray [10] --;

fill (133, 200, 124)
drawingContext.shadowBlur = 150
drawingContext.shadowcolor = color(133, 200, 124)


ellipse(0, wPosArray [0], drum*2); 
ellipse(100, wPosArray [1], drum*2);
ellipse(200, wPosArray [2], drum*2); 
ellipse(300, wPosArray [3], drum*2);
ellipse(400, wPosArray [4], drum*2);
ellipse(500, wPosArray [5], drum*2);
ellipse(600, wPosArray [6], drum*2);
ellipse(700, wPosArray [7], drum*2);
ellipse(800, wPosArray [8], drum*2);
ellipse(900, wPosArray [9], drum*2);
ellipse(1000, wPosArray [10], drum*2);


wPosArray [0] --;
wPosArray [1] --;
wPosArray [2] --;
wPosArray [3] --;
wPosArray [4]--;
wPosArray [5] --;
wPosArray [6] --;
wPosArray [7] --;
wPosArray [8] --;
wPosArray [9] --;
wPosArray [10] --;

fill (98, 122, 188)
drawingContext.shadowBlur = 100
drawingContext.shadowcolor = color(98, 122, 188)

ellipse(0, uPosArray [0], drum); 
ellipse(100, uPosArray [1], drum);
ellipse(200, uPosArray [2], drum); 
ellipse(300, uPosArray [3], drum);
ellipse(400, uPosArray [4], drum);
ellipse(500, uPosArray [5], drum);
ellipse(600, uPosArray [6], drum);
ellipse(700, uPosArray [7], drum);
ellipse(800, uPosArray [8], drum);
ellipse(900, uPosArray [9], drum);
ellipse(1000, uPosArray [10], drum);

uPosArray [0] --;
uPosArray [1] --;
uPosArray [2] --;
uPosArray [3] --;
uPosArray [4]--;
uPosArray [5] --;
uPosArray [6] --;
uPosArray [7] --;
uPosArray [8] --;
uPosArray [9] --;
uPosArray [10] --;


fill(237, 181, 130)
drawingContext.shadowBlur = 100
drawingContext.shadowcolor = color(98, 122, 188)

for (let iii = 0; iii < 10;iii++){
  ellipse(iii*vocal,200, 70, 70)
}


var bassMap = map(bass,0,75,10,70);

for (var ii = 1; ii <= 3; ii++){ 
  var yStep = ii * 50
  for (var i = 1; i <= 5; i ++) {

    ellipse(175 * i, yStep, bassMap);
    
  }
}

image(myImage2,0,0)


  }


// rectMode(CENTER)     

// stroke(bass,20,100);
// fill(drum,150,150)


  // let drumMap = map(vocal, 0,100 ,30,90);//parseInt
  // let lengthOfrect = 10;
  // let rectY = 200;
  // let rectX = 100;

  // for(let i=1; i <= drum; i++){
  //  let rectstep = i*drum;
  //  rect(rectstep, rectY, 3,vocal)



