function fishTank(input) {
    let lengtInCm = Number(input[0]);
    let wideInCm = Number(input[1]);
    let hightInCm = Number(input[2]);
    let procentFull = Number(input[3]);

    let totalObem = lengtInCm * wideInCm * hightInCm;
    let totalObemInLiters = totalObem / 1000;

    let totalLitters = totalObemInLiters * (1 - 0.17);




    console.log(totalLitters);
}

fishTank(["85", "75", "47", "17"]);
