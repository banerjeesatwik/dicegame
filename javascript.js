var random1= Math.floor(Math.random()*6)+1;
var random1img="img/dice"+random1+"-png.png";
var random2=Math.floor(Math.random()*6)+1;
var random2img="img/dice"+random2+"-png.png";


document.querySelectorAll(".dice-img")[0].setAttribute("src" , random1img);
document.querySelectorAll(".dice-img")[1].setAttribute("src" , random2img);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="Congratulations. Player 1 won!!";
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="Congratulations. Player 2 won!!";
}
else
{
    document.querySelector("h1").innerHTML="Oops, Match Tied..Refresh again to get winner !!";
}
