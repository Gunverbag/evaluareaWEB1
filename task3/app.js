function reversArray(arr){
    let revers = [];
    for (let i = arr.length - 1; i >=0; i--){
        revers.push(arr[i]);
    }
    return revers;
}

console.log (reversArray([1, 2, 3, 4]));
console.log (reversArray(['a', 'b', 'c', 'd']));