// 1. Reverse an Array Manually
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4]));
console.log("-----------------");


//2. Find the Second-Largest Number in an Array
function secondLargest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}
console.log(secondLargest([10, 20, 30, 40]));
console.log("-----------------");


//3. Merge Two Arrays Without Duplicates
function mergeWithoutDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeWithoutDuplicates([1, 2, 3], [2, 3, 4])); 
console.log("-----------------");


// 4. Find the Frequency of Each Element in an Array
function frequencyCount(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3])); 
console.log("-----------------");


//5. Implement a Manual Version of the includes Method
function manualIncludes(arr, value) {
    for (let item of arr) {
        if (item === value) return true;
    }
    return false;
}
console.log(manualIncludes([1, 2, 3], 2)); 
console.log(manualIncludes([1, 2, 3], 4)); 
console.log("-----------------");


//6. Shift Elements in an Array to the Left by One Position
function shiftLeft(arr) {
    if (arr.length === 0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(shiftLeft([1, 2, 3, 4]));
console.log("-----------------");


//7. Rotate an Array to the Right by k Steps
function rotateRight(arr, k) {
    k = k % arr.length;  
    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); 
console.log("-----------------");


//8. Remove All Duplicate Elements in an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); 
console.log("-----------------");


//9. Create a 2D Array Representing a Multiplication Table for Numbers 1 to 10
function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
console.table(multiplicationTable());
console.log("-----------------");


//10. Find the Intersection of Two Arrays
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); 
