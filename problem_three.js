function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let totalBudget = 0;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let totalCost = keyboards[i] + drives[j]
            if ((totalCost > totalBudget) && (totalCost <= b)) {
                totalBudget = totalCost;
            }
        }
    }
    if (totalBudget === 0) {
        return -1;
    } else {
        return totalBudget;
    }

}
