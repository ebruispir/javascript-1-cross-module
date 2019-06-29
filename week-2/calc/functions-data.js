// data (variables)
var x = 10;
var y = 5;
// functions
function print_vals (a,b){
console.log("number1: "+ a +"\nnumber2: "+ b);
}

function add(a,b){
   return a+b; 
}

function subtract(a,b){
   return a-b;     
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function do_math(a,b,func){
    
  console.log (func(a,b));

}
