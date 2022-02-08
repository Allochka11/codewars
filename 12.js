function countSheeps(arrayOfSheep) {
    if(arrayOfSheep === null || arrayOfSheep.length < 1) {
        return
    }
    let sum = 0;
    arrayOfSheep.map(sheep=> { sheep ? sum += sheep : sum })
    return sum
}

function countSheeps2(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}