//check the number is prime or not  
function isBoolean(num){
   for(let i = 2 ; i<num ; i++){
        if(i%num === 0){
            return false ;
        }
        else{
            return true ;
        }
   }  
}

console.log(isBoolean(6));



