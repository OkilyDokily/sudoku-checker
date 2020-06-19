import {convertStringToArray,convertArrayTo2DArray, convertArrayToSetAndDetermineIfSetHasLengthOfNine,mapOver2DArrayToSeeIfEachHasASetSizeOfNine,mapOverEachVerticalArrayInA2DArrayToSeeIfEachHasASetSizeOfNine} from '../src/sudoku-checker.js'

describe("convertStringToArray",()=>{
  test("Convert string of 81 digits to array of 81 digits",()=>{
    const array = convertStringToArray("123");
    expect(array).toEqual([1,2,3]);
  });
});


describe("convertArrayTo2DArray",()=>{
  test("Convert array of 81 digits to 2d array of 9 by 9",()=>{
    const array = new Array(81).fill(1);
    const result = convertArrayTo2DArray(array);
    const testArray = [new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1),new Array(9).fill(1)];
    expect(result).toEqual(testArray);
  });
});


describe("convertArrayToSetAndDetermineIfSetHasLengthOfNine",()=>{
  test("Convert array to set and determine if set has length of nine",()=>{
    const array = [1,2,3,4,5,6,7,8,9];
    const result = convertArrayToSetAndDetermineIfSetHasLengthOfNine(array);
    expect(result).toEqual(true);
  });

  test("Convert array to set and determine if set has length of nine",()=>{
    const array = [1,2,3,3,5,6,7,8,9];
    const result = convertArrayToSetAndDetermineIfSetHasLengthOfNine(array);
    expect(result).toEqual(false);
  });
});

describe("mapOver2DArrayToSeeIfEachHasASetSizeOfNine",()=>{
  test("map Over 2D array To see if each has a set size of nine",()=>{
    let twoDArray = [];
    for(let j = 0; j <= 8; j++){
      let array = [];
      for(let i = 0; i <= 8; i++){   
        array.push(i+1);
      }
      twoDArray.push(array);
    }
    const result = mapOver2DArrayToSeeIfEachHasASetSizeOfNine(twoDArray);
    expect(result).toEqual(true);
  });

  test("map Over 2D array To see if each has a set size of nine",()=>{
    let twoDArray = [];
    for(let j = 0; j <= 8; j++){
      let array = [];
      for(let i = 0; i <= 8; i++){   
        array.push(i+1);
      }
      twoDArray.push(array);
    }
    twoDArray[7][7] = 5;
    const result = mapOver2DArrayToSeeIfEachHasASetSizeOfNine(twoDArray);
    expect(result).toEqual(false);
  });
});


describe("mapOverEachVerticalArrayInA2DArrayToSeeIfEachHasASetSizeOfNine",()=>{
  test("map over each vertical array in a 2d array to see if each has a set size of nine",()=>{
    let twoDArray =[new Array(9).fill(1),new Array(9).fill(2),new Array(9).fill(3),new Array(9).fill(4),new Array(9).fill(5),new Array(9).fill(6),new Array(9).fill(7),new Array(9).fill(8),new Array(9).fill(9)]
    const result = mapOverEachVerticalArrayInA2DArrayToSeeIfEachHasASetSizeOfNine(twoDArray);
    expect(result).toEqual(true);
  });

  test("map over each vertical array in a 2d array to see if each has a set size of nine",()=>{
    let twoDArray =[new Array(9).fill(1),new Array(9).fill(2),new Array(9).fill(3),new Array(9).fill(3),new Array(9).fill(5),new Array(9).fill(6),new Array(9).fill(7),new Array(9).fill(8),new Array(9).fill(9)]
    const result = mapOverEachVerticalArrayInA2DArrayToSeeIfEachHasASetSizeOfNine(twoDArray);
    expect(result).toEqual(false);
  });
});