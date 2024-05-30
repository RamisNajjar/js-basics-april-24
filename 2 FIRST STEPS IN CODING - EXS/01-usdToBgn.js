function usdToBgn(input) {
    let amount = Number(input[0]);
    let bgn = 1.79549;
    let usdTotal = amount * bgn;

    console.log(usdTotal);
}

usdToBgn(['22'])
