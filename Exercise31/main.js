function operate(a ,b, callback){
    return callback(a ,b);
}

function add(a , b){
    return a + b;
}
function subtract(a , b){
    return a - b;
}
function multiply(a , b){
    return a * b;
}
function divide(a , b){
    return a / b;
}

console.log("Addition: ", operate(5 , 5 , add));
console.log("Subraction: ", operate(10 , 5 , subtract));
console.log("Multiplication: ", operate(5 , 5 , multiply));
console.log("Division: ", operate(20 , 5 , divide));