Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot() {
 Webcam.snap(function (picture) {
  document.getElementById("result").innerHTML="<img id='photo'class='photos' src="+picture+">";
 })   ;
}
console.log("ml5 version",ml5.version);
var version=ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/DEdHZWeL8/model.json',modeluploaded);
function modeluploaded(){
    
console.log("model is loaded");}