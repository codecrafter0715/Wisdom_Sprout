//  1. Print a Square of Asterisks
function printSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '*';
        }
        console.log(row);
    }
}
printSquare(5);
console.log("-----------------");


// 2. Print a Right-Angled Triangle
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
printTriangle(5);
console.log("-----------------");


//3. Print an Inverted Right-Angled Triangle 
function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
printInvertedTriangle(6);
console.log("-----------------");


// 4. Print a Pyramid
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
}
printPyramid(5);
console.log("-----------------");


// 5. Print a Diamond
function printDiamond(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
}
printDiamond(5);
console.log("-----------------");


// 6. Number Pyramid
function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + String(i).repeat(2 * i - 1);
        console.log(row);
    }
}
printNumberPyramid(4);
console.log("-----------------");


// 7: Pascal's Triangle
function printPascalsTriangle(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        arr[i][0] = 1;
        arr[i][i] = 1;
        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
    }
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += arr[i][j] + ' ';
        }
        console.log(row.trim());
    }
}
printPascalsTriangle(5);
console.log("-----------------");


//8. Hollow Square
function printHollowSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
printHollowSquare(5);
console.log("-----------------");


//9. Hourglass Pattern
function printHourglass(n) {
    for (let i = n; i >= 1; i--) {
        let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
        for (let i = 2; i <= n; i++) {
        let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
}
printHourglass(4);
console.log("-----------------");


