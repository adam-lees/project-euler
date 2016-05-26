// Find the sum of all the multiples of 3 or 5 below 1000.

var arr = [];
var totalSum = 0;

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0) {
        arr.push(i);
    }
    else if (i % 5 === 0) {
        arr.push(i);
    }
}

for (var y = 0; y < arr.length; y++) {
    totalSum += arr[y];
}

console.log(totalSum);

//Faster solution

var sum = 0;

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);