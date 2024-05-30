function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let appPrice = 0;

    switch (month) {
        case "May" :
        case "October" :
            studioPrice = nights * 50;
            appPrice = nights * 65;

            if (nights > 14) {
                studioPrice *= 0.7;
            } else if (nights > 7) {
                studioPrice *= 0.95;
            }
            break;

        case "June" :
        case "September" :
            studioPrice = nights * 75.2;
            appPrice = nights * 68.7;

            if (nights > 14) {
                studioPrice *= 0.8;
            }
            break;

        case "July" :
        case "August" :
            studioPrice = nights * 76;
            appPrice = nights * 77;
            break;
    }

    if (nights > 14) {
        appPrice *= 0.9;
    }

    console.log(`Apartment: ${appPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    
    
}

hotelRoom(["May", "15"]);