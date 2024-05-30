function basketballEquipment(input) {
    let tax = Number(input[0]); 

    let shoes = tax * 0.6;
    let clos = shoes * 0.8;
    let ball = clos * 0.25;
    let accs = ball * 0.2;

    let totallExp = tax + shoes + clos + ball + accs;

    console.log(totallExp);

}

basketballEquipment(["365"]);
