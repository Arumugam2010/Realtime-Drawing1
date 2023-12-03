noseX = 0;
noseY = 0;
difference= 0;
rightWristX = 0;
leftWristY= 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.X;
        noseY= results[0].pose.nose.Y;
        console.log("noseX = " + noseX + "noseY = " + noseY)
    }
}

function draw() {
    background('FF0000');
    document.getElementById("square_side").innerHTML = "width and height of square will be = "+ difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, 100);
}