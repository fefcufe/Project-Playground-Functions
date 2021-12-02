// Desafio 1
function compareTrue(booleano1, booleano2) {
  let result;
  if (booleano1 === true && booleano2 === true) {
    result = true;
  }
  else {
    result = false;
  }
  return result;
}
 
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));
// console.log(compareTrue(true, true));



// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1))


// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  console.log(array);
}

// splitSentence('go Trybe');
// splitSentence('vamo que vamo');
// splitSentence('foguete');


// Desafio 4
function concatName(array) {
  let lastPosition = array.length - 1;
  let result = array[lastPosition] + ', ' + array[0];
  return result;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return (points);
}

 // console.log(footballPoints(14,8));
 // console.log(footballPoints(1,2));
 // console.log(footballPoints(0,0));


// Desafio 6
function highestCount(array) {
  let majorNumber = array[0];
  let count = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > majorNumber) {
      majorNumber = array[i];
    }
  }

  for (let number of array) {
    if (number === majorNumber) {
      count += 1;
    } 
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
