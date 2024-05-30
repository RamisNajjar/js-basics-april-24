function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (fruit) {
        case "banana" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = quantity * 2.5;
            } else if (day === "Saturday" || day === "Sunday") {
                price = quantity * 2.7;
            }
            console.log(price.toFixed(2));
            break;

        case "apple" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = quantity * 1.2;
            } else if (day === "Saturday" || day === "Sunday") {
            price = quantity * 1.25;
            }
            console.log(price.toFixed(2));
            break;

        case "orange" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = quantity * 0.85;
            } else if (day === "Saturday" || day === "Sunday") {
            price = quantity * 0.9;
            }
            console.log(price.toFixed(2));
            break;

        case "grapefruit" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = quantity * 1.45;
            } else if (day === "Saturday" || day === "Sunday") {
            price = quantity * 1.60;
            }
            console.log(price.toFixed(2));
            break;

        case "kiwi" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = quantity * 2.7;
            } else if (day === "Saturday" || day === "Sunday") {
            price = quantity * 3;
            }
            console.log(price.toFixed(2));
            break;

        case "pineapple" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = quantity * 5.5;
            } else if (day === "Saturday" || day === "Sunday") {
            price = quantity * 5.60;
            }
            console.log(price.toFixed(2));
            break;

        case "grapes" : 
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = quantity * 3.85;
            } else if (day === "Saturday" || day === "Sunday") {
            price = quantity * 4.2;
            }
            console.log(price.toFixed(2));
            break;

        default :
            console.log("error");
            break;           
}


    
}

fruitShop(["apple", "Tuesday", "2"]);