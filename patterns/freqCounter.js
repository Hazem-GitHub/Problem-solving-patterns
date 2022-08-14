// Anagram >> words with the same characters frequency ordered differently
function isAnagram(arr1, arr2) {
    if( arr1.length !== arr2.length ) {
        return false || `Not the same length`;
    }
    if( !arr1.length || !arr2.length ) {
        return false || `Please enter two values to compare their frequencies`;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for ( let val of arr1 ){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1;
    }
    for ( let val of arr2 ){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for ( let key in frequencyCounter1){
        if( !(key in frequencyCounter2) ) {
            return false || `No, it doesn't`;
        }
        if( frequencyCounter1[key] !== frequencyCounter2[key] ){
            return false || `No, it doesn't`;
        }
    }
    return true && `Yes, it does`;
}

console.log(`Does ['lorem ipsum', 'msmup ierol'] are an anagram words? >> ${isAnagram('lorem ipsum', 'msmup ierol')}`);