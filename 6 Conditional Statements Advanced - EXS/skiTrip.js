function skiTrip(input) {
    let stay = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];

    let priceOfStay = 0;
    let nights = stay - 1;

    switch (typeRoom) {
        case "room for one person" :
            priceOfStay = nights * 18;
            break;
        
        case "apartment" :
            priceOfStay = nights * 25;

            if (nights < 10) {
                priceOfStay *= 0.7;
            } else if (nights <= 15) {5
                priceOfStay *= 0.65;
            } else if (nights > 15) {
                priceOfStay *= 0.5;
            } 
            break;

        case "president apartment" :
            priceOfStay = nights * 35;

            if (nights < 10) {
                priceOfStay *= 0.9;
            } else if (nights <= 15) {
                priceOfStay *= 0.85;
            } else {
                priceOfStay *= 0.8;
            }
            break;
    }   

    if (rating === "positive") {
        priceOfStay *= 1.25;
    } else if (rating === "negative") {
        priceOfStay *= 0.9;
    }

    console.log(`${priceOfStay.toFixed(2)}`);
            
            
}

skiTrip(["30", "president apartment", "negative"]);