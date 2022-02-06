function positiveSum(arr) {
    let sum = 0;
    if (arr == null || arr.length < 0) {
        return sum;
    }

    for (let i in arr) {
        if (arr[i] <= 0) {
            continue;
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

positiveSum([1, -4, 7, 15]);


function positiveSum2(arr) {
    if (arr == null || arr.length < 0) {
        return 0;
    }

    return arr.filter((num) => num > 0)
        .reduce((a, b) => a + b, 0);
}

console.log(positiveSum2([1, -4, 7, 16]));