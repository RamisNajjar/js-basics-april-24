function cinemaTicket(input) {
    let dayOfWeek = input[0];

    let price = 0;

    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Friday") {
        price = 12; 
    } else if (dayOfWeek === "Wednesday" || dayOfWeek === "Thursday") {
        price = 14;
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        price = 16;
    }
    
    console.log(price);
}

cinemaTicket(["Sunday"]);