function getDigit(num, searchIndex){

    // Edge case: if search index is NEGATIVE value returns NULL 
    if(searchIndex < 0) return null;

    /////// String solution
    // const numString = `${num}`;
    // return ( searchIndex < numString.length ) ?
    //  +numString[numString.length - searchIndex - 1] : 0;

    ///////// Math solution
    return Math.floor( Math.abs(num) / Math.pow(10, searchIndex) ) % 10;

}
// console.log(getDigit(-12349873, 2));


function digitCount(num) {
    //////// Recursive solution
    // let count = 1;
    // function recursiveCount(numNext) {
    //     numNext = Math.floor(numNext / 10);
    //     if(numNext > 0) {
    //         count++;
    //         recursiveCount(numNext);
    //     }
    // }
    // recursiveCount(Math.abs(num));
    // return count;

    //////// Math solution
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(-123304));

function mostDigits(arr) {
    let maxDigits = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}


// console.log(mostDigits([-123, 12, -1344896, 1, 233]));


function radixSort(arr) {
    let maxDigitsCount = mostDigits(arr);
    for (let k=0; k < maxDigitsCount; k++){
        let positiveDigitBuckets = Array.from({length: 10}, ()=>[]);
        let negativedigitBuckets = Array.from({length: 10}, ()=>[]);
        // console.log(digitBuckets);
        for( let i=0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            if(arr[i] >= 0) {
                positiveDigitBuckets[digit].push(arr[i]);
            }else{
                negativedigitBuckets[digit].push(arr[i]);
            }
        }
        console.log(negativedigitBuckets, positiveDigitBuckets);
        arr = [].concat(...negativedigitBuckets.reverse()).concat(...positiveDigitBuckets);
    }
    return arr;
}

console.log(radixSort([23, 345, 5467, 234, 54, 1, 33, 5, 10000,101, 25, 7,4,3085, -4, -48, -9]));

