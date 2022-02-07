function solution(str){
    return str.split('').reverse().join('');
}

function solution2(str){
    var reversed = '';
    for(var i = str.length - 1; i>=0 ; i--) {
        reversed += str[i];
    }
    return reversed
}

console.log(solution2('billboard'));