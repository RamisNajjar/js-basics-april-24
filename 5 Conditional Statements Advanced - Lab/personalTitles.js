function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === "m" && age >= 16) {
        console.log("Mr.")
    } else if (gender === "m" && age < 16) {
        console.log("Master")
    } else if (gender === "f" && age >= 16) {
        console.log("Ms.")
    } else {
       (gender === "f" && age < 16)
        console.log("Miss")
    }
}

personalTitles(["12", "f"]); 