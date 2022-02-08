function abbrevName(name){
    let allName =  name.split(' ');
    return (allName[0][0] + '.' + allName[1][0]).toUpperCase();
}