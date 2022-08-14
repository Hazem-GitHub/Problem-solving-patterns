// Find max sum
function maxSubarraySum(arr, num){
    let tempSum = 0;
    let maxSum = 0;
    for ( let i=0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for ( let i = num; i < arr.length - num + 1; i++ ) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if ( tempSum > maxSum ) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(`Max sum in sub array [2,3,4,5,6,7,2,1] for every 3 characters: ${maxSubarraySum([2,3,4,5,6,7,2,1], 3)}`);
