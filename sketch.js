var myMusic;
var size;
var r,g,b;
var x = 200;
var y = 200;
var speedx = 6;
var speedy = 6;


function preload(){
myMusic = loadSound('js/intoyou.mp3');
}



function setup(){
 cnv = createCanvas(800,600); 
  amplitude = new p5.Amplitude();
 myMusic.setVolume(0.1);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  
 
}


function draw(){
   background(255);
   stroke(255);
   fill(r,g,b);
   move();
  
   
 	var level = amplitude.getLevel();
	size = map(level,0,1,0,200);

rect(random(50,100),random(100,200),size,size);
rect(random(100,150),random(150,250),size,size);
rect(random(150,200),random(100,200),size,size);
rect(random(250,300),random(100,200),size,size);
rect(random(350,400),random(100,200),size,size);
rect(random(400,800),random(100,200),size,size);
 

	rectMode(CENTER);
    rect(random(200,400),random(400,600),size,size);
     rect(random(200,400),random(400,600),size,size);
        rect(random(200,400),random(400,600),size,size);
        rect(random(200,400),random(400,600),size,size);
     rect(random(200,400),random(400,600),size,size);
     rect(random(0,600),random(400,600),size,size);
     rect(random(0,600),random(400,600),size,size);
   
}


function move(){
			y = y + speedy;
				x = x + speedx;
		if(y > height || y < 0){
								y = random(height);
									r = random(0,255);
				g = random(0,255);
				b = random(0,255);
		}
	if(x > width || x<0){
			x =  random(width);  
				r = random(0,255);
				g = random(0,50);
				b = random(0,100);
			
	} 
}

function mouseClicked(){
if(myMusic.isPlaying()){
  myMusic.pause();  
}  
else{
    myMusic.play();
    fill(r,g,b);
}
}
