function getMoneySpent(keyboards, drives, b) {
    let arrPrice = [];
    let available = 0;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b) {
                arrPrice.push(keyboards[i] + drives[j]);
                available = 1;
            }
        }
    }
    if (available === 0) {
        return -1;
    } else {
        return Math.max(...arrPrice);
    }
}

getMoneySpent()