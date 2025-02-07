"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "TransactionType.Deposit";
    TransactionType["Withdraw"] = "TransactionType.Withdraw";
})(TransactionType || (TransactionType = {}));
var accounts = [];
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive) {
    if (isActive === void 0) { isActive = true; }
    var newAccount = {
        accountNo: accountNo,
        firstname: firstname,
        lastname: lastname,
        isActive: isActive,
        balance: initialDeposit,
        transactions: [],
    };
    accounts.push(newAccount);
    return newAccount;
}
function processTransaction(accountNo, amount, transactionType) {
    var account = getAccount(accountNo);
    if (!account) {
        return "Account does not exists!";
    }
    account.transactions.push({ amount: amount, accountNo: accountNo, type: transactionType });
    var status = "";
    if (transactionType === TransactionType.Deposit) {
        account.balance += amount;
        status = "".concat(amount, " deposited into account number ").concat(accountNo);
    }
    else if (transactionType === TransactionType.Withdraw) {
        if (amount > account.balance) {
            status = "Insufficient funds for withdrawal";
        }
        else {
            account.balance -= amount;
            status = "".concat(amount, " withdrawn from account number ").concat(accountNo);
        }
    }
    return status;
}
function getBalance(accountNo) {
    var _a, _b;
    return (_b = (_a = getAccount(accountNo)) === null || _a === void 0 ? void 0 : _a.balance) !== null && _b !== void 0 ? _b : null;
}
function getTransactionHistory(accountNo) {
    var _a, _b;
    return (_b = (_a = getAccount(accountNo)) === null || _a === void 0 ? void 0 : _a.transactions) !== null && _b !== void 0 ? _b : null;
}
function checkActiveStatus(accountNo) {
    var _a, _b;
    return (_b = (_a = getAccount(accountNo)) === null || _a === void 0 ? void 0 : _a.isActive) !== null && _b !== void 0 ? _b : false;
}
function getAccount(accountNumber) {
    var account = accounts.find(function (account) { return account.accountNo === accountNumber; });
    if (!account)
        throw new Error("Account not found.");
    return account;
}
function closeAccount(accountNo) {
    var account = getAccount(accountNo);
    if (!account)
        return "Account does not exists";
    account.isActive = false;
    return "Account ".concat(accountNo, " has been closed");
}
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
