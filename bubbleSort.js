// bubble sort
let arr = [4,5,6,2,3];
let n = 5;

console.log("Original Array: ", arr);

for(let i=0 ; i<n-1; i++ ){
    for(let j=0 ; j<n-i-1 ; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log("Sorted Array: ", arr);