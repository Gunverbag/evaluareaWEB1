function countOccurence(arr, num) {
    let sum = 0; // счётчик
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === num) {
            sum++;
        }
    }
    return sum;
}

console.log(countOccurence([1,2,2,2,3,4,5,6,7,2], 2)); 