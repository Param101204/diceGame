var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
if(randomNumber == 1)document.querySelector(".img1").setAttribute("src", './dice1.png');
else if(randomNumber == 2)document.querySelector(".img1").setAttribute("src", './dice2.png');
else if(randomNumber == 3)document.querySelector(".img1").setAttribute("src", './dice3.png');
else if(randomNumber == 4)document.querySelector(".img1").setAttribute("src", './dice4.png');
else if(randomNumber == 5)document.querySelector(".img1").setAttribute("src", './dice5.png');
else if(randomNumber == 6)document.querySelector(".img1").setAttribute("src", './dice6.png');
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
if(randomNumber2 == 1)document.querySelector(".img2").setAttribute("src", './dice1.png');
else if(randomNumber2 == 2)document.querySelector(".img2").setAttribute("src", './dice2.png');
else if(randomNumber2 == 3)document.querySelector(".img2").setAttribute("src", './dice3.png');
else if(randomNumber2 == 4)document.querySelector(".img2").setAttribute("src", './dice4.png');
else if(randomNumber2 == 5)document.querySelector(".img2").setAttribute("src", './dice5.png');
else if(randomNumber2 == 6)document.querySelector(".img2").setAttribute("src", './dice6.png');
if(randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else if (randomNumber == randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️It's a Tie!<br/>Refresh Again.🏳️"
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
