// function declaration

function add(a, b) {
    console.log(a+b);
}

add(5, 10);
add(20, 30);


// function expression

const adding = function(a, b) {
    return a + b;
};

console.log(adding(15, 25));
console.log(adding(100, 200));


// arrow function
const sum = (a, b) => {
    console.log(a + b);
};

sum(50, 70);
sum(120, 180);