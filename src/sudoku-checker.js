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