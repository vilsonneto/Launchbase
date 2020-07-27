const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance += transaction.value
    }
    else {
        user.balance -= transaction.value
    }
}

function sendMenssage(menssage) {
    console.log(menssage)
}

function getHigherTransactionByType(type) {
    let higherTransiction
    let maxValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > maxValue) {
            maxValue = transaction.value
        }
    }

    console.log(`The higher transaction of ${type} is: ${maxValue} `)
}

function getAverengeTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        debit: 0,
        credit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit++
        }
        else {
            count.debit++
        }
    }

    return count
}


createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

sendMenssage(`The balance of the ${user.name} is: ${user.balance}`)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

sendMenssage(`The average value transition is: ${getAverengeTransactionValue()}`)

sendMenssage(getTransactionsCount())