//PLAYER 01 SETUP 

//ramdomly it select number from 1 to 6 
var randomNo1 = Math.floor((Math.random() * 6) + 1);
// it will map the random  number with image number
var randomImg1= "images/dice " + randomNo1 + ".PNG";

var image1 = document.querySelectorAll("img")[0];  //player 1
image1.setAttribute("src", randomImg1);

//PLAYER 02 SETUP 

var randomNo2 = Math.floor((Math.random() * 6) + 1);
var randomImg2= "images/dice " + randomNo2 + ".PNG";

var image2 = document.querySelectorAll("img")[1];  //player 2
image2.setAttribute("src", randomImg2);

//PLAYER 03 SETUP 

var randomNo3 = Math.floor((Math.random() * 6) + 1);
var randomImg3= "images/dice " + randomNo3 + ".PNG";

var image3 = document.querySelectorAll("img")[2];  //player 3
image3.setAttribute("src", randomImg3);

//Main logic for winner

var maxScore = Math.max(randomNo1, randomNo2, randomNo3);

var winners = [];

if (randomNo1 == maxScore) {
   winners.push("Player 1");
}

if (randomNo2 == maxScore) {
   winners.push("Player 2");
}

if (randomNo3 == maxScore) {
   winners.push("Player 3");
}

var resultDiv = document.getElementById("result");

if (winners.length === 1) {
    resultDiv.innerHTML = "The winner is <strong>" + winners[0] + "</strong> with a score of <strong>" + maxScore + "</strong>.";
} else {
    resultDiv.innerHTML = "It's a tie between <strong>" + winners.join("</strong> and <strong>") + "</strong> with a score of <strong>" + maxScore + "</strong>.";
}