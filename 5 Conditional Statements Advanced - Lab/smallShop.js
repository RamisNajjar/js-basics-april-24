function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let volume = Number(input[2]);

    let price = 0;

    if (city === "Varna") {
        switch (product) {
            case "coffee": price = volume * 0.45; break;
            case "water": price = volume * 0.70; break;
            case "beer": price = volume * 1.10; break;
            case "sweets": price = volume * 1.35; break;
            case "peanuts": price = volume * 1.55; break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": price = volume * 0.40; break;
            case "water": price = volume * 0.70; break;
            case "beer": price = volume * 1.15; break;
            case "sweets": price = volume * 1.30; break;
            case "peanuts": price = volume * 1.50; break;
        }
    } else if (city === "Sofia") {
        switch (product) {
            case "coffee": price = volume * 0.50; break;
            case "water": price = volume * 0.80; break;
            case "beer": price = volume * 1.20; break;
            case "sweets": price = volume * 1.45; break;
            case "peanuts": price = volume * 1.60; break;
        }
    }
    
    console.log(price);
}

smallShop(["beer", "Sofia", "2"]);