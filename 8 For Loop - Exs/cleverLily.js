function smartLily(age, washingMachinePrice, toyPrice) {
    let moneySaved = 0;
    let totalToyMoney = 0;
    let moneyGift = 10;
    let brotherTakes = 1;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            // Even birthday, receives money
            moneySaved += moneyGift;
            moneyGift += 10;
            moneySaved -= brotherTakes; // Brother takes 1 lev
        } else {
            // Odd birthday, receives a toy
            totalToyMoney += toyPrice;
        }
    }

    let totalMoney = moneySaved + totalToyMoney;

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}


smartLily(10, 170.00, 6);