export function convertStringToArray(string){
    return [...string].map(function(item){
      return parseInt(item);
    });
}

export function convertArrayTo2DArray(array){
  let result = [array.slice(0,9),array.slice(9,18),array.slice(18,27),array.slice(27,36),array.slice(36,45),array.slice(45,54),array.slice(54,63),array.slice(63,72),array.slice(72,81)];
  return result;
}

export function convertArrayToSetAndDetermineIfSetHasLengthOfNine(array){
  let set = new Set(array);
  return set.size === 9
}

export function mapOver2DArrayToSeeIfEachHasASetSizeOfNine(twoDArray){
  let result = twoDArray.map(function(array){
    return convertArrayToSetAndDetermineIfSetHasLengthOfNine(array);
  })
  return result.filter(item => item === true).length === 9
}

export function mapOverEachVerticalArrayInA2DArrayToSeeIfEachHasASetSizeOfNine(twoDArray){
  let newTwoDArray = [];
  for (let j = 0; j <=8; j++){
    let verticalArray = [];
    for(let i = 0; i <= 8; i++){
     
      verticalArray.push(twoDArray[i][j])
    }
    newTwoDArray.push(verticalArray);
  }
  return mapOver2DArrayToSeeIfEachHasASetSizeOfNine(newTwoDArray);
}

export function mapOverEachTableInBoardToSeeIfEachHasASetSizeOfNine(twoDArray){
  let newTwoDArray = [];
  for (let l = 0; l <=2; l++){
    for (let k = 0; k <=2; k++){
      let array = [];
      for (let j = 0 + (3 * l); j <= 2 + (3 * l); j++){
        for (let i = 0 + (3 * k); i <= 2 + (3 * k); i++){
          array.push(twoDArray[j][i]);
        }
      }
      newTwoDArray.push(array)
    }
  }
  return mapOver2DArrayToSeeIfEachHasASetSizeOfNine(newTwoDArray);
}

export function testThatInputsAreValid(inputString){
   return !(/[^1-9]/.test(inputString)) && inputString.length === 81;
}
