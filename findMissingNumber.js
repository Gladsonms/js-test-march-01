const findMissingNumber=(arr)=> {
    const n = arr.length;
    
    const totalSum = ((n + 1) * (n + 2)) / 2;
    
    
    const arraySum = arr.reduce((sum, num) => sum + num, 0);
    
    
    return totalSum - arraySum;
}

const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); // Output: 6
console.log(findMissingNumber(arr2)); // Output: 3
