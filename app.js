var  imageArray= ["Assets/monster.jpg", "Assets/fantasy.jpg"];
var i =0;
var img = document.getElementById("imgthing")
function imageChange(){
    if(i==1){
        i = 0;
    }
    else{
        i = i+1;
    }
    img.src = imageArray[i];
}
document.getElementById("btn").addEventListener("click", imageChange);


var  imageArray2= ["Assets/Dragon.jpg", "Assets/Lulu.jpg"];
var img2 = document.getElementById("imgthing2")
function imageChange2(){
    if(i==1){
        i = 0;
    }
    else{
        i = i+1;
    }
    img2.src = imageArray2[i];
}
document.getElementById("btn2").addEventListener("click", imageChange2);


var  imageArray3= ["Assets/rose.jpg","Assets/Float.png"];
var img3 = document.getElementById("imgthing3")
function imageChange3(){
    if(i==1){
        i = 0;
    }
    else{
        i = i+1;
    }
    img3.src = imageArray3[i];
    console.log("I work");
}
document.getElementById("btn3").addEventListener("click", imageChange3);


var  imageArray4 = ["Assets/thorn.png", "sunset.jpg"];
var img4 = document.getElementById("imgthing4")
function imageChange4(){
    if(i==1){
        i = 0;
    }
    else{
        i = i+1;
    }
    img4.src = imageArray4[i];
    console.log("test");
}
document.getElementById("btn4").addEventListener("click", imageChange4);

