// Login button functionality
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault()

    const phoneNumber = 12345678910, pinNumber = 1234;
    const userPhoneNumber = parseInt(document.getElementById('phone-number').value);
    const userPinNumber = parseInt(document.getElementById('pin-number').value);

    if(userPhoneNumber === phoneNumber && userPinNumber === pinNumber) {
        window.location.href = "./home.html";
    } else {
        alert('invalid');
    }
})