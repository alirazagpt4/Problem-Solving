const isPrime = (num)=>{

    if (num < 2) return false;
    let sqrtNum = Math.sqrt(num);
    console.log(sqrtNum)

   for(let i = 2 ; i<= sqrtNum ; i++){
        if(num % i === 0 ){
            return false ;
        }
   }
   return true;
}

console.log(isPrime(14));



