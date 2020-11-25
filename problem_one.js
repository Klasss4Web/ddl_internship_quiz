
/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sumOfArray = 0;
    for(let i = 0; i < ar.length; i++){
        sumOfArray += ar[i];
    }
    
    return sumOfArray;
}
