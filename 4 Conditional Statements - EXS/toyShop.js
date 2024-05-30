function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let numberOfPuzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let moneyEarned = (numberOfPuzzles * 2.6) + (talkingDolls * 3) + (teddyBear * 4.1) + (minions * 8.2) + (trucks * 2);
    let allToys = numberOfPuzzles + talkingDolls + teddyBear + minions + trucks;

    if (allToys >= 50){
        moneyEarned *= 0.75;
    }

    moneyEarned *= 0.9;

    if (moneyEarned >= excursionPrice){
        let moneyLeft = moneyEarned - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = excursionPrice - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);