function find_average(array) {
    return array.length !== 0 ? array.reduce((total, array) => (total + array),0) / array.length : 0;
}