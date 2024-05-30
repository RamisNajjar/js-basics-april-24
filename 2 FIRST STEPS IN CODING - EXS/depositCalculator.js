function depositCalculator(input) {
    let amount = Number(input[0]);
    let time = Number(input[1]);
    let interestRate = Number(input[2]) / 100;

    let interest = amount * interestRate;
    let montleyInterest = interest / 12;
    let totalAmount = amount + time * montleyInterest;

    console.log(totalAmount);

}
 
depositCalculator(["200", "3", "5.7"]);