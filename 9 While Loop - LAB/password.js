function password(input) {
    let index = 0;
    let username = input[index];
    index++;

    let pass = input[index];
    index++

    while (true) {
        let tempPass = input[index];
        index++;
        if (tempPass === pass) {
            console.log(`Welcome ${username}!`);
            break;
        }

        console.log("Wrong password");
    }

}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
