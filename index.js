document.querySelectorAll("button")[0].addEventListener("click",myFunction);
function myFunction() {
  var x = document.getElementById("myText1").value;
document.getElementById("player1Name").innerHTML = x;
  var y = document.getElementById("myText2").value;
document.getElementById("player2Name").innerHTML = y;
}
document.querySelectorAll("button")[1].addEventListener("click",final);
function final(){
setInterval(dicethrow(), 5000);
}
function dicethrow(){
//dice1//
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = randomImage1;
var throwDice1 = document.querySelectorAll("img")[0];
throwDice1.setAttribute("src", randomImgSource1);
//dice2//
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = randomImage2;
var throwDice2 = document.querySelectorAll("img")[1];
throwDice2.setAttribute("src", randomImgSource2);


//who wins//
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent= "🚩  Winner !!! 👈";
} else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent= "👉 Winner !!! 🚩";
}else{
    document.querySelector("h1").textContent="Draw !!! ";
}
}
