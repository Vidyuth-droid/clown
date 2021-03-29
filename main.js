NoseX=0;
NoseY=0;
function preload(){
    //clown_nose = loadImage('https://i.postimg.pngcc/7ZBcjDqp/clownnose.');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(0,0,0);
circle(NoseX,NoseY,20);
//image(clown_nose,NoseX,NoseY,30,30);
}
function take_snapshot(){
  save("circus.png");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("Nose X= "+results[0].pose.nose.x);
        console.log("Nose Y= "+results[0].pose.nose.y);
        //NoseX=results[0].pose.nose.x-15;
        //NoseY=results[0].pose.nose.y-15;
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
    }
}


