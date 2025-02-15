const {isPrime} = require('./prime')

 isPrime.isPrime;
for(i=1 ; i<=50 ; i++){
    if(isPrime(i)){
        console.log(`${i} is a prime`);
    }  
    else console.log(i + " is not a prime number");
}