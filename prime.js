const isPrime = (num)=>{

    if (num < 2) return false;
    let sqrtNum = Math.sqrt(num);
    let sqr = Math.floor(sqrtNum);
    console.log(sqr)

   for(let i = 2 ; i<= sqr ; i++){
        if(num % i === 0 ){
            return false ;
        }
   }
   return true;
}

console.log(isPrime(14));



module.exports = {isPrime};