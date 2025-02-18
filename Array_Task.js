function findSubarraysWithSum(arr, target) {
    let result = [];

    
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]; 

            
            if (sum === target) {
                result.push(arr.slice(i, j + 1)); 
            }
        }
    }
    return result;
}
let arr = [1, 2, 3, 4, 5];
let target = 5;
console.log(findSubarraysWithSum(arr, target));
