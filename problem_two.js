// Complete the staircase function below.
function staircase(n) {
    
    for(let j = 1; j <= n; j++) {
        console.log(" ".repeat(n-j) + "#".repeat(j));
    }   
}
