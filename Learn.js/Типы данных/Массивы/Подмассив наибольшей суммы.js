//  Подмассив наибольшей суммы

function getMaxSubSum(arr) {
  let maxSum = 0;
  let curSum = 0;

  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    maxSum = Math.max(maxSum, curSum);

    if (curSum < 0) curSum = 0;
  }

  return maxSum;
}
