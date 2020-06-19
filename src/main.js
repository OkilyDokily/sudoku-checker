import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { validateSudoku } from './sudoku-checker';


$(document).ready(function(){
  $("button").click(function(){
    let input = "";
    $("input").each(function(){
      input += $(this).val();
    })
    let isValid = validateSudoku(input);
    if(isValid){
      $("#results").text("This is a valid Sudoku");
    }
    else{
      $("#results").text("This is not a valid Sudoku")
    }
  })
});