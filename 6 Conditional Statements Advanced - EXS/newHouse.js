function newHouse(input) {
    let flowerType = input[0];
    let amount = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;

    switch (flowerType) {
        case "Roses" :
            flowerPrice = amount * 5;
            break;
        case "Dahlias" :
            flowerPrice = amount * 3.8;
            break;
        case "Tulips" :
            flowerPrice = amount * 2.8;
            break; 
        case "Narcissus" :
            flowerPrice = amount * 3;
            break;  
        case "Gladiolus" :
            flowerPrice = amount * 2.5;
            break;
    }

    if (amount > 80 && flowerType === "Roses") {
        flowerPrice *= 0.9; 
    } else if (amount > 90 && flowerType === "Dahlias") {
        flowerPrice *= 0.85;
    } else if (amount > 80 && flowerType === "Tulips") {
        flowerPrice *= 0.85;
    } else if (amount < 120 && flowerType === "Narcissus") {
        flowerPrice *=  1.15;
    } else if (amount < 80 && flowerType === "Gladiolus") {
        flowerPrice *= 1.2;
    }

    if (budget >= flowerPrice) {
        let moneyLeft = budget - flowerPrice;
        console.log(`Hey, you have a great garden with ${amount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyShort = flowerPrice - budget;
        console.log(`Not enough money, you need ${moneyShort.toFixed(2)} leva more.`);
    }

    
}


newHouse(["Tulips", "88", "260"]);