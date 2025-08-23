// Add money feature
const validPin = 1234;

// function to get input value 
function getInputValueNumber(id)
{
const inputField = document.getElementById(id);
const inputFieldValueNumber = parseInt(inputField.value);
return inputFieldValueNumber;
}
function getInputValue(id)
{
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// function to get input value 
function getInnerText(id)
{
    const element = document.getElementById(id);
    element.value = element.innerText;
    const elementValueNumber = parseInt(element.value);
    return elementValueNumber;
}

// function to set inner text
function setInnerText(value)
{
    const element = document.getElementById(id);
    element.innerText = value;
}

document.getElementById('add-money-btn').addEventListener('click', function(e){
e.preventDefault();
const bankSelect = document.getElementById('bank-select').value;
const accountNumber = document.getElementById('account-number').value;
const amount = parseInt(document.getElementById('add-amount').value);
const pinNumber = parseInt(document.getElementById('pin-number').value);
const availableBalance = getInnerText('available-balance');
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

const amount = parseInt(document.getElementById('withdraw-amount').value) ;

const availableBalance = getInnerText('available-balance');
const totalNewAvailableBalance = availableBalance - amount;
// console.log(totalNewAvailableBalance);

document.getElementById('available-balance').innerText = totalNewAvailableBalance;
setInnerText(totalNewAvailableBalance)
});












// toggling feature 
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})

document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})


