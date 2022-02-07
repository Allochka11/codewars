const makeNegative = (num) => num > 0 ? -num : num

function repeatStr (n, s) {
    return s.repeat(n);
}

function removeChar(str){
    return str.slice(1, str.length - 1)
}