function fakeBin(x){
    let tmp = '';
    for(var i = 0; i < x.length; i++) {
        if(x[i] >= '5') tmp += '1';
        if(x[i] < '5') tmp += '0';
    }
    return tmp;

    //or  return x.split('').map(n => n < 5 ? 0 : 1).join('')
}