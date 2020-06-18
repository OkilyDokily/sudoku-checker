import {convertStringToArray,convertArrayTo2DArray, convertArrayToSetAndDetermineIfSetHasLengthOfNine} from '../src/sudoku-checker.js'

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