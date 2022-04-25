nose_x= 0;
nose_y= 0;

function preload()
{
mustache= loadImage('https://i.postimg.cc/V61VJCgS/brown-moustache-pngimages-for-brown-mustache-png-kspmtqtq.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }


  function draw()
  {
      image(video, 0, 0, 300, 300);
      fill(0, 255, 0);
stroke(0, 255, 0);
      image(mustache, nose_x, nose_y, 30, 30);
  }

  function take_snapshot()
  {
      save("MyFilterImage.png");
  }

  function modelLoaded()
  {
      console.log("Posenet Model Loaded.");
  }

  function gotPoses(results)
  {
    console.log(results);
    nose_x= results[0].pose.nose.x-15;
nose_y =results[0].pose.nose.y-15;
    
    console.log("Nose x="+ nose_x);
    console.log("Nose y="+ nose_y);

  }