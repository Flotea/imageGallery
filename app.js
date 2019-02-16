var  imageArray= ["Assets/monster.jpg", "Assets/fantasy.jpg","Assets/rose.png", "Assets/Float.jpg","Assets/thorn.jpg"];
var i =0;
var img = document.getElementById("imgthing")
function imageChange(){
    if(i==4){
        i = 0;
    }
    else{
        i = i+1;
    }
    img.src = imageArray[i];
}
document.getElementById("btn").addEventListener("click", imageChange);

