// Desafio 10
function techList(array, name) {
  array = array.sort();
  let newArray = [];
  let finalSentence = 'Vazio!';

  for (let i = 0; i < array.length; i += 1) {
    let obj  = {
      tech: array[i],
      name: name
    }
    newArray.push(obj);
  }

  if (array.length === 0) {
    return finalSentence;
} else {
    return newArray;
}
}

//console.log(techList(['React', 'CSS', 'HTML'], 'Fernanda'));
//console.log(techList([],'Fernanda'));
  


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = 0;
  let result = false;

  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    check += 1;
  } 
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    check += 1;
  } 
  if (check === 2) {
      result = true;
  }
  return result;
  }
  
console.log(triangleCheck(10,14,8));


// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
 // generatePhoneNumber,
  techList,
 // hydrate,
  triangleCheck,
};
