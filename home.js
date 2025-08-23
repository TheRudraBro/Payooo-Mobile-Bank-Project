// Add money feature
const validPin = 1234;
document.getElementById('add-money-btn').addEventListener('click', function(event){
event.preventDefault();
const bankSelect = document.getElementById('bank-select').value;
const accountNumber = document.getElementById('account-number').value;
const amount = parseInt(document.getElementById('add-amount').value);
const pinNumber = parseInt(document.getElementById('pin-number').value);
const availableBalance = parseInt(document.getElementById('available-balance').innerText);
if(accountNumber.length < 11){
    alert('Invalid account number');
    return;
}
if(pinNumber !== validPin){
    alert('Invalid PIN');
    return;
}
const totalBalance = availableBalance + amount;

document.getElementById('available-balance').innerText = totalBalance;

})


// cash-out feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
e.preventDefault();

const amount = parseInt(document.getElementById('withdraw-amount').value);

const availableBalance = parseInt(document.getElementById('available-balance').innerText)
const totalNewAvailableBalance = availableBalance - amount;

document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})












// toggling feature 
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})

document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})


