
// print the table of number given
let number = 7;
for(let digit = 1 ; digit<=10 ; digit++){
    console.log(number + "x" + digit + "=" + number * digit);
}

// print table through every element of an  array elements 
let num = [1,2,3,4,5 , 6,7];

for(let i = 0 ; i<=num.length-1 ; i++){
    // console.log(num[i] + "x" + i + "=" + num[i]*i);
    for(let j=1; j<=10;j++){
        console.log(num[i] + "x" + j + "=" + num[i]*j);
    }
}
