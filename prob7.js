function findSecondLargest(arr){
    if(arr.length === 0){
        throw new Error("Array is empty");
    }

    let largest = arr[0];
    let secondLargest = -Infinity;

    for(let i = 0 ; i<=arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }

    
    return largest && secondLargest === -Infinity ? 'No second largest element found!' : `Second Largest and largest elements are ${secondLargest} and ${largest}`;
}

let numbers = [10, 20, 30, 40, 50];

let result = findSecondLargest(numbers);

console.log(result);