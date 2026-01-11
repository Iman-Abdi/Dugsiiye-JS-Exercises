const numbers = [1,2,3];
const newNumbers = [...numbers , 4,5,6];

console.log(newNumbers);

function Multiply (...Numbers){
    return Numbers.reduce((total,num)=> total * num , 1);
}

console.log(Multiply(1,2,3,4,5));