document.getElementById('add-money-btn').addEventListener('click', function(event){
event.preventDefault();
const bankSelect = document.getElementById('bank-select').value;
const accountNumber = document.getElementById('account-number').value;
const amount = parseInt(document.getElementById('add-amount').value);
const pinNumber = document.getElementById('pin-number').value;

const availableBalance = parseInt(document.getElementById('available-balance').innerText);
const totalBalance = availableBalance + amount;

document.getElementById('available-balance').innerText = totalBalance;

})