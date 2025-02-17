// Recursion is a programming technique that a function call itself repeatedly to solve a problem
function factorial(num){
     if(num > 1){
        return num * factorial(num-1);
     }
     else{
        return 1;
     }
}

console.log(factorial(-3)); 

let x = 9;
let y = factorial(x);
console.log(`the factorial of ${x} is ${y}`);
