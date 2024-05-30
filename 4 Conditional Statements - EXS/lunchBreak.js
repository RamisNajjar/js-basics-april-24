function lunchBreak(input) {
    let nameOfShow = input[0];
    let timeOfShow = Number(input[1]);
    let timeOfBreak = Number(input[2]);

    let timeOfLunch = 1 / 8 * timeOfBreak;
    let timeOfRest = 1 / 4 * timeOfBreak;

    let timeLeft = timeOfBreak - timeOfLunch - timeOfRest;

    if (timeLeft >= timeOfShow) {
        let freeTime = timeLeft - timeOfShow;
        console.log(`You have enough time to watch ${nameOfShow} and left with ${Math.ceil(freeTime)} minutes free time.`)
    } else {
        let timeNeeded = timeOfShow - timeLeft;
        console.log(`You don't have enough time to watch ${nameOfShow}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "60", "96"])