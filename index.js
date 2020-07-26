var value1 = Math.floor(Math.random()*6 +1);
var value2 = Math.floor(Math.random()*6 +1);
var diceimage = "dice"+value1+".png";
var imagesource = "images/" + diceimage ;
document.querySelector(".dice1").setAttribute("src",imagesource);
var imagesource2 = "images/dice" + value2 + ".png" ;
document.querySelector(".dice2").setAttribute("src",imagesource2);
if(value1 > value2){
    document.querySelector("h1").innerHTML="🚩player1 is winner"
}
else if (value2 > value1) {
    document.querySelector("h1").innerHTML="player2 is winner🚩"
}
else {
  document.querySelector("h1").innerHTML="It is a draw"
}
