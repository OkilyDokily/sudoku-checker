import {convertStringToArray} from '../src/sudoku-checker.js'

describe("convertStringToArray",()=>{
  test("Convert string of 81 digits to array of 81 digits",()=>{
    const array = convertStringToArray("123");
    expect(array).toEqual([1,2,3]);
  });
});