function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let secondsLeft = totalTime % 60;

    if (secondsLeft >= 10) {
        console.log(`${minutes}:${secondsLeft}`);
    } else {
        console.log(`${minutes}:0${secondsLeft}`);
    }

}

sumSeconds(["35", "45", "44"])