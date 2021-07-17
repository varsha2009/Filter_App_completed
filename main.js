rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(450,340);
    canvas.position(800,167);
    video = createCapture(VIDEO);
    video.size(450,450);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',getPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function draw(){
    background("rgb(184, 221, 255)");
    fill("black")
    textSize(difference);
    text("Varsha",0,190);
}
function getPoses(results){
    if(results.length>0){
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    console.log("rightWristX = "+rightWristX);
    console.log("leftWristX = "+leftWristX);
    difference = floor(leftWristX-rightWristX);
    console.log("size = "+difference);
   }
    
}