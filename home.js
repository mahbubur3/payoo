const validPin = 1234;

// Add money functionality
document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (accountNumber.length < 11) {
        alert("provide valid account number");
        return;
    }

    if (pinNumber != validPin) {
        alert("provide valid pin number");
        return;
    }

    const totalAvailableBalance = amount + availableBalance;

    // Set amount in deshboard
    document.getElementById("available-balance").innerText = totalAvailableBalance;
})


// Toggling functionality
document.getElementById('add-money-feature-btn').addEventListener("click", function() {
    document.getElementById('cashout-container').style.display = "none";
    document.getElementById('add-money-container').style.display = "block";
})

document.getElementById('cashout-feature-btn').addEventListener("click", function() {
    document.getElementById('cashout-container').style.display = "block";
    document.getElementById('add-money-container').style.display = "none";
})