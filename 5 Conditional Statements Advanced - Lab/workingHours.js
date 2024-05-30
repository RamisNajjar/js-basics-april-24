function workingHours(input) {
    let hourOfDay = Number(input[0]);
    let dayOfWeek = input[1]; 

    switch (dayOfWeek) {
        case "Monday" :
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" :
        case "Friday" :
        case "Saturday" :
            if (workingTime = hourOfDay > 10 && hourOfDay < 18) {
                console.log("open")
            } 
            

            break;
}
}


workingHours(["11", "Monday"]);