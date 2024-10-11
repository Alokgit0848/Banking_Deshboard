let currentBalance = 1000;
let transactionList = [];

function updateBalanceDisplay() {
    document.getElementById("currentBalance").innerText = `$${currentBalance.toFixed(2)}`;
}

function updateTransactionHistory() {
    const transactionListElement = document.getElementById("transactionList");
    transactionListElement.innerHTML = '';

    if (transactionList.length === 0) {
        transactionListElement.innerHTML = '<li>No transactions yet.</li>';
        return;
    }

    transactionList.forEach(transaction => {
        const li = document.createElement("li");
        li.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)}`;
        li.style.color = transaction.type === "Deposit" ? "green" : "red";
        transactionListElement.appendChild(li);
    });
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }
    
    currentBalance += depositAmount;
    transactionList.push({ type: "Deposit", amount: depositAmount });
    
    updateBalanceDisplay();
    updateTransactionHistory();
    document.getElementById("depositAmount").value = '';
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }
    
    if (withdrawAmount > currentBalance) {
        alert("Insufficient funds.");
        return;
    }
    
    currentBalance -= withdrawAmount;
    transactionList.push({ type: "Withdraw", amount: withdrawAmount });
    
    updateBalanceDisplay();
    updateTransactionHistory();
    document.getElementById("withdrawAmount").value = '';
}


updateBalanceDisplay();
