const reverseSeq = n => {
    let reverse = [];
    for(let i = n; i > 0; i--) {
        reverse.push(i)
    }
    return reverse
};

//num 4 => [4,3,2,1]

function DNAtoRNA(dna) {
    return dna.replace(/t/gi, 'u').toUpperCase();
}

console.log(DNAtoRNA("GACCGCCGCC"));