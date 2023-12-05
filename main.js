song="";

function preload(){
     song=loadSound("song.mp3");
}

function setup()
{
    canvasW = createCanvas(400,300);
    canvasW.parent("Div3");
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 400, 300);
   
}

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eLff94H7o/model.json', modelReady);
}

function modelReady(){
    classifier.classify(findNote);
    console.log(classifier)
}

function findNote(error, results){
    if(error){
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("listen").style.display="block";
        document.getElementById("buttonC").textContent="Listening";
        document.getElementById("buttonC").style.color="grey";
        document.getElementById("buttonC").disabled=true;

        img=document.getElementById("myCanvasImg"); 

    if(results[0].label == "C")
    {
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: C";
        img.src='c.jpeg';
    }else if(results[0].label == "D")
    {
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: D";
        img.src='d.png';
    }else if(results[0].label == "E"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: E";
        img.src='e.png';
    }else  if(results[0].label == "F"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: F";
        img.src='f.jpg';
    }else  if(results[0].label == "G"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: G";
        img.src='g.jpg';
    }else  if(results[0].label == "Background Noise"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is not clear!";
        img.src='x.jpg';
    }

    }
}