// Find first pair
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while ( left < right) {
        const sum = arr[left] + arr[right];
        if( sum === 0 ) {
            return [ arr[left], arr[right] ];
        }else if( sum > 0 ){
            right--;
        }else{
            left ++;
        }
    }
    return [];
}

// count unique numbers
function uniqueNumCounter(arr) {
    if( arr.length == 0 ){
        return 0;
    }
    let i=0;
    for ( let j=i+1; j < arr.length; j++ ) {
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
        
    
}

console.log(`Count unique numbers in an array [ -3, -2, -1, -1, 0, 1, 2, 2, 3, 4, 4, 5, 6, 56 ]: ${uniqueNumCounter([ -3, -2, -1, -1, 0, 1, 2, 2, 3, 4, 4, 5, 6, 56 ] )}`);

console.log(`Find first pair in [ -3, -2, -1, 0, 1 ] ${sumZero( [ -3, -2, -1, 0, 1 ] )}`);