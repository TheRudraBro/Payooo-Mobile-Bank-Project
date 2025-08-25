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

// function to toggle
function handleToggle(formId)
{
       const forms = document.getElementsByClassName('form');
for(const form of forms){
    form.style.display = 'none';
}
document.getElementById(formId).style.display = 'block';
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
handleToggle('add-money-parent');

})

document.getElementById('cashout-button').addEventListener('click', function(){
// //     document.getElementById('add-money-parent').style.display = 'none';
// //  document.getElementById('transfer-money-parent').style.display = 'none';
// //     document.getElementById('cash-out-parent').style.display = 'block';
// const forms = document.getElementsByClassName('form');
// // console.log(forms);
// for(const form of forms){
//     // console.log(form);
//     form.style.display = 'none';
// }
// document.getElementById('cash-out-parent').style.display = 'block';
handleToggle('cash-out-parent');

})



  document.getElementById('transfer-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('transfer-money-parent').style.display = 'block';
handleToggle('transfer-money-parent');
})

  document.getElementById('get-bonus-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('get-bonus-parent').style.display = 'block';
handleToggle('get-bonus-parent');
})

// pay bill
  document.getElementById('pay-bill-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('pay-bill-parent').style.display = 'block';
handleToggle('pay-bill-parent');
})

// transaction 
  document.getElementById('transactions-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('transactions-parent').style.display = 'block';
handleToggle('transactions-parent');
})