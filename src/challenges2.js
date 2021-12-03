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
  
// console.log(triangleCheck(10,14,8));


// Desafio 13
function hydrate(string) {
  let isInteger = /\d+/g; // cria uma variavel que identifica dígitos  
  let matches = string.match(isInteger); // .match compara a variável de digitos isInteger com a string dada como parametro e armazena as coincidencias na lista matches 
  let glassOfWater = 0;

  for (let i = 0; i < matches.length; i += 1) {
    matches[i] = parseInt(matches[i], 10);
  }

  for (let k = 0; k < matches.length; k += 1) {
    glassOfWater += matches[k];
  }
  if (glassOfWater === 1) {
    return glassOfWater + ' copo de água'
  } else {
    return glassOfWater + ' copos de água'
  }  

}

// console.log(hydrate('2 cervejas, 3 caipirinhas'))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
