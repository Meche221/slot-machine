//  1. Deposit some money   ✅
//  2. Determine number of lines to bet   ✅ 
//  3. Collect a bet amount    ✅
//  4. Spin the slot machine
//  5. check if the user won
//  6. give the user their winnings
//  7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = Number(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again")
    } else {
        return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of Lines to bet on (1-3): ");
        const numberOfLines = Number(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Enter a valid Lines you want to bet, Try Again")
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line: ");
        const numberBet = Number(bet);

        if(isNaN(numberBet) || numberBet > (balance / lines) || numberBet <= 0) {
            console.log("Invalid amount, Try Again")
        } else {
            return numberBet;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

console.log(bet);