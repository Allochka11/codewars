function squareSum(numbers){
    let sum = 0;
    numbers.map((num)=> {
        sum += num * num
    })
    return sum
}