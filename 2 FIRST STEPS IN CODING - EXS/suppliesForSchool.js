function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markPacks = Number(input[1]);
    let detLiters = Number(input[2]);

    let totalAmount = penPacks * 5.8 + markPacks * 7.2 + detLiters * 1.2;
    let discountAmount = 25 / 100 * totalAmount;

    let total = totalAmount - discountAmount;

    console.log(total);

}

suppliesForSchool(["2", "3", "4", "25"])