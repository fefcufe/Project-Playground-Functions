// Desafio 10
function techList(array, name) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let obj = {
      tech: array[i],
      name: name
    }
  }
  newArray += obj;
  return newArray
}

console.log(techList(['React', 'CSS', 'HTML'], 'Fernanda'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
