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
  console.log(result);
}

// concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
// concatName(['foguete', 'não', 'tem', 'ré']);
// concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
