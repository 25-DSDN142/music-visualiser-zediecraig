
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
colorMode(HSB,100);
background(50, 60, 100);
rectMode(CENTER)     
strokeWeight(9);
stroke(bass,20,100);
fill(drum,150,150)


  let drumMap = map(vocal, 0,100 ,30,90);//parseInt
  let lengthOfrect = 10;
  let rectY = 200;
  let rectX = 100;

  for(let i=1; i <= drum; i++){
   let rectstep = i*drum;
   rect(rectstep, rectY, 30,300, vocal)




}
}


