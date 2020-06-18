import {convertStringToArray,convertArrayTo2DArray} from '../src/sudoku-checker.js'

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