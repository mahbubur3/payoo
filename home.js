const validPin = 1234;

// Get user input value from input field
function getInputValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText);
}

function setInnerText(value) {
    document.getElementById("available-balance").innerText = value;
}

// Add money functionality
document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("amount");
    const pinNumber = getInputValueNumber("pin-number");
    const availableBalance = getInnerText("available-balance");

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
    setInnerText(totalAvailableBalance);
})


// cashout functionality 
document.getElementById("cashout-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const cashoutAmount = getInputValueNumber("cashout-amount");
    const availableBalance = getInnerText("available-balance");
    const totalNewAvailableBalance = availableBalance - cashoutAmount;

    setInnerText(totalNewAvailableBalance);
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










// const validPin = 1234;

// // Add money functionality
// document.getElementById('add-money-btn').addEventListener('click', function(event) {
//     event.preventDefault();
    
//     const bank = document.getElementById("bank").value;
//     const accountNumber = document.getElementById("account-number").value;
//     const amount = parseInt(document.getElementById("amount").value);
//     const pinNumber = parseInt(document.getElementById("pin-number").value);
//     const availableBalance = parseInt(document.getElementById("available-balance").innerText);

//     if (accountNumber.length < 11) {
//         alert("provide valid account number");
//         return;
//     }

//     if (pinNumber != validPin) {
//         alert("provide valid pin number");
//         return;
//     }

//     const totalAvailableBalance = amount + availableBalance;

//     // Set amount in deshboard
//     document.getElementById("available-balance").innerText = totalAvailableBalance;
// })


// // cashout functionality 
// document.getElementById("cashout-btn").addEventListener("click", function(event) {
//     event.preventDefault();

//     const cashoutAmount = parseInt(document.getElementById("cashout-amount").value);
//     const availableBalance = parseInt(document.getElementById("available-balance").innerText);

//     const totalNewAvailableBalance = availableBalance - cashoutAmount;
//     document.getElementById("available-balance").innerText = totalNewAvailableBalance;
// })


// // Toggling functionality
// document.getElementById('add-money-feature-btn').addEventListener("click", function() {
//     document.getElementById('cashout-container').style.display = "none";
//     document.getElementById('add-money-container').style.display = "block";
// })

// document.getElementById('cashout-feature-btn').addEventListener("click", function() {
//     document.getElementById('cashout-container').style.display = "block";
//     document.getElementById('add-money-container').style.display = "none";
// })