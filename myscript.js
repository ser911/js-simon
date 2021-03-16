var randomNumbers = [];
var numbers = [];
var userNumbers = [];
for (var i = 1; randomNumbers.length <= 4; i++) {
  var numbers = Math.floor(Math.random()* 10) + 1;
if (randomNumbers.includes(numbers) == false) {
  randomNumbers.push(numbers);
}

}
alert(randomNumbers);

setTimeout(function () {
for (var i = 1; i <= 5 ; i++) {
  var userNumbers = prompt("Inserisci i numeri che ricordi");
  console.log(userNumbers);
}
}, 10000);
