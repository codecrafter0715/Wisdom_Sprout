// Create a function to calulate a factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5:", factorial(5));


//Even And odd Number 
function isEven(num) {
    return num%2==0? "Even": "Odd";
    }
    console.log("7 is:", isEven(7)); 
    console.log("10 is:", isEven (10));


// Reverse String
// Function to reverse a string
function reverseString(str) {
    let reversed = "";  
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Reverse of 'hello':", reverseString("hello"));  


// Largest Of Three Numbers
function largestOfThree(a, b, c) {
    if (a > b && a > c) return a;
    if (b > a && b > c) return b;
    return c;
}
console.log("Largest of (10, 20, 15):", largestOfThree(10, 20, 15));


// Sum of Array Elements
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of [1, 2, 3, 4, 5]:", sumOfArray([1, 2, 3, 4, 5]));  


// Area and Perimeter of a Rectangle
function rectangleProperties(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area, perimeter };
}
const { area, perimeter } = rectangleProperties(8, 6);
console.log("Area:", area);  
console.log("Perimeter:", perimeter); 


// Check Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log("2024 is leap year:", isLeapYear(2024));  
console.log("2023 is leap year:", isLeapYear(2023));


// Multiplication Table
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(5);


//Check Palindrome
function isPalindrome(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log("Is 'radar' a palindrome?", isPalindrome("radar"));  
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); 


//Greatest Common Divisor (GCD)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log("GCD of 56 and 98:", gcd(56, 98)); 
console.log("GCD of 12 and 15:", gcd(12, 15)); 
