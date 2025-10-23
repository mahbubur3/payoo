document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = document.getElementById("pin-number").value;

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const totalAvailableBalance = amount + availableBalance;

    // Set amount in deshboard
    document.getElementById("available-balance").innerText = totalAvailableBalance;
    
})