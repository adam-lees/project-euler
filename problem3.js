/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

//This function figures out whether a number is prime or not.
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/* This function starts from the total - 1 and decrements until it finds
the first prime factor. */
function primeFactor(total) {
    for (var j = total - 1; j > 1; j--) {
        if (total % j === 0 && isPrime(j)) {
            return j;
        }
    }
}

//numbers bigger than this take a long time to run.
console.log(primeFactor(60085147));