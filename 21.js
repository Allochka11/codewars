//Сумма всех чисел до и после указанных
function getSum( a,b )
{
    if(a === b) return a;
    if(a > b) {
        return a + getSum(a-1, b)
    } else {
        return a + getSum(a+1,b)
    }
}