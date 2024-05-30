function cinema(input) {
    let typeProject = input[0];
    let numberOfRaws = Number(input[1]);
    let numberOfColumns = Number(input[2]);

    let income = 0;

    if (typeProject === "Premiere") {
        income = numberOfRaws * numberOfColumns * 12;
    } else if (typeProject === "Normal") {
        income = numberOfColumns * numberOfRaws * 7.5;
    } else if (typeProject === "Discount") {
        income = numberOfColumns * numberOfRaws * 5;
    } 
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);