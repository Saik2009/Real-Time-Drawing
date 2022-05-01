nosex=0;
nosey=0;
left_wrist=0;
right_wrist=0;
difference=0;
function setup()
{
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('azure');
    fill("orange");
    stroke("black");
    square(nosex,nosey,difference);

}
function modelLoaded(){
    console.log("Model is loaded!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
    else{
        //nose
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("NoseX= "+nosex+" NoseY= "+nosey);
        //wrist
        left_wrist=results[0].pose.leftWrist.x;
        right_wrist=results[0].pose.rightWrist.x;
        console.log("left_wrist= "+left_wrist+" right_wrist= "+right_wrist);
        difference=floor(left_wrist-right_wrist);
    }
}