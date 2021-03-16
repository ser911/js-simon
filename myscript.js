var randomNumbers = [];
var numbers = [];
var userNumbers = [];
var num = [];
userScore = 0;
for (var i = 1; randomNumbers.length <= 4; i++) {
  var numbers = Math.floor(Math.random()* 10) + 1;
if (randomNumbers.includes(numbers) == false) {
  randomNumbers.push(numbers);
}

}
alert(randomNumbers);

setTimeout(function () {
for (var i = 1; i <= 5 ; i++) {
  var num = parseInt(prompt("Inserisci i numeri"));
 userNumbers.push(num);


}

if (randomNumbers.includes(userNumbers[0])) {
  userScore += 1;

}
if (randomNumbers.includes(userNumbers[1])) {
  userScore += 1;

}
if (randomNumbers.includes(userNumbers[2])) {
  userScore += 1;

}
if (randomNumbers.includes(userNumbers[3])) {
  userScore += 1;

}
if (randomNumbers.includes(userNumbers[4])) {
  userScore += 1;

}

console.log("Punteggio: " + userScore );

}, 30000);
