function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let shipPrice = 0;

    switch (season) {
        case "Spring" :
            shipPrice = 3000;
            break;
        
        case "Summer" :
        case "Autumn" :
            shipPrice = 4200;
            break;

        case "Winter" :
            shipPrice = 2600;
            break;
    }

    if (fisherman <= 6) {
        shipPrice *= 0.9;
    } else if (fisherman <= 11) {
        shipPrice *= 0.85;
    } else {
        shipPrice *= 0.75;
    }

    if (fisherman % 2 === 0 && season !== "Autumn") {
        shipPrice *= 0.95;
    }

    if (budget >= shipPrice) {
        let moneyLeft = budget - shipPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyShort = shipPrice - budget;
        console.log(`Not enough money! You need ${moneyShort.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"]);