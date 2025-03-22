// find max and min in an array 

function findMaxMin(arr){
  if(arr.length === 0){
    return "Array is empty";
  }

  let max = arr[0];
  let min = arr[0];

  for(let i=0; i<=arr.length ; i++){
     if(arr[i] > max){
        max = arr[i];
     }
     if(arr[i] < min){
        min = arr[i];
     }

    }
    return {max , min}
}

let numbers = [10, 20, 30, 40, 50];

let result = findMaxMin(numbers);

console.log("Maximum:", result.max);

console.log("Minimum:", result.min);
