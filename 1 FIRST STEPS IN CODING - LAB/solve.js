function calculateAccountBalance(transactions) {
    let totalBalance = 0;
    let i = 0;

    while (i < transactions.length) {
        let currentTransaction = transactions[i];

        if (currentTransaction === "NoMoreMoney") {
            break;
        }

        let amount = parseFloat(currentTransaction);

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${amount.toFixed(2)}`);
        totalBalance += amount;

        i++;
    }

    console.log(`Total: ${totalBalance.toFixed(2)}`);
}

// Примерен вход
calculateAccountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);