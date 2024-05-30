function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardPrice = 250;
    let processorPrice = (35/100 * (videoCardPrice * videoCards)) * processors;
    let ramPrice = (10/100 * (videoCardPrice * videoCards)) * ram;

    let totalAmountNeeded = (videoCardPrice * videoCards) + processorPrice + ramPrice;
    
    if (videoCards > processors) {
        totalAmountNeeded = totalAmountNeeded - (15/100 * totalAmountNeeded);
    }

    if (budget >= totalAmountNeeded) {
        let budgetLeft = budget - totalAmountNeeded;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    } else {
        let budgetNeeded = totalAmountNeeded - budget;
        console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`)
    }


}

shopping(["920.45", "3", "1", "1"]);