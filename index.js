var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var c="images/dice"+a+".png";
var d="images/dice"+b+".png";
document.querySelectorAll("img")[0].setAttribute("src",c);
document.querySelectorAll("img")[0].setAttribute("src",d);
if(a>b){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(b>a){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}