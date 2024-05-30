function worldSwimmingRecord(input) {
    let worldRecordInSeconds = Number(input[0]);
    let distanceToSwimInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);

    let newTimeForRecord = timeInSecondsForOneMeter * distanceToSwimInMeters;
    
    let timeMinus15 = Math.floor((distanceToSwimInMeters / 15)) * 12.5;

    let totalNewTime = newTimeForRecord + timeMinus15;
    
    if (worldRecordInSeconds <= totalNewTime) {
        console.log(`No, he failed! He was ${(totalNewTime - worldRecordInSeconds).toFixed(2)} seconds slower.`);
    
    } else { 
        console.log(`Yes, he succeeded! The new world record is ${totalNewTime.toFixed(2)} seconds.`)
    }


}


worldSwimmingRecord(["55555.67", "3017", "5.03"]);