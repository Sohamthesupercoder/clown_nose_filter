nose_x = 0;
nose_y = 0;


function preload(){
clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(440,260);
    video= createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
   image(video,0,0,640,480);
   
   image(clown_nose,nose_x,nose_y,60 , 60);
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
nose_x = results[0].pose.nose.x-30;
nose_y = results[0].pose.nose.y-30;
console.log("nose x =" + nose_x);
console.log("nose y =" + nose_y);

    }
}


function snap(){
    save("me_the_clown.png");
}