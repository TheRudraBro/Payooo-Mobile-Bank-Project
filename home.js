// Add money feature
const validPin = 1234;
//transaction
const transactions = [];

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




// function to toggle button
function handleButtonToggle(buttonId)
{
    const buttons = document.getElementsByClassName('form-btn');
    for(const btn of buttons){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
    }
    document.getElementById(buttonId).classList.remove('border-gray-300');
    document.getElementById(buttonId).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}








document.getElementById('add-money-btn').addEventListener('click', function(e){
e.preventDefault();
const bankSelect = document.getElementById('bank-select').value;
const accountNumber = document.getElementById('account-number').value;
const amount = parseInt(document.getElementById('add-amount').value);

if(amount<=0){
  alert('Invalid amount');
  return;
}

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
const data = {
  name: 'Add Money',
  date: new Date().toLocaleTimeString()
}
transactions.push(data);

// console.log(transactions)

})


// cash-out feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
e.preventDefault();

const amount = parseInt(document.getElementById('withdraw-amount').value) ;



const availableBalance = getInnerText('available-balance');
const totalNewAvailableBalance = availableBalance - amount;
// console.log(totalNewAvailableBalance);

document.getElementById('available-balance').innerText = totalNewAvailableBalance;
setInnerText(totalNewAvailableBalance);


if(amount<=0 || amount > availableBalance){
  alert('Invalid amount');
  return;
}


const data = {
  name: 'Cash-Out',
  date: new Date().toLocaleTimeString()
}
transactions.push(data);

console.log(transactions);
});


// transaction history
document.getElementById('transactions-button').addEventListener('click', function(){
  // console.log(' transaction btn click')
  // console.log(transactions);
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';
 
    for(const data of transactions){
        const div = document.createElement('div');
        div.innerHTML = `
        
<div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
    <div class="flex items-center">
        <div class=" p-3 rounded-full bg-[#f4f5f7]">
            <img src="Images/wallet1.png" class="mx-auto" alt="">
        </div>
        <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
        </div>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
</div>

        `
        transactionContainer.appendChild(div);
    }
});



// toggling feature 
document.getElementById('add-button').addEventListener('click', function(){
handleToggle('add-money-parent');
handleButtonToggle('add-button');

// const formsBtns = document.getElementsByClassName('form-btn');
// // console.log(formsBtns);

// for (const btn of formsBtns) {
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
//     btn.classList.add('border-gray-300');
// }
// document.getElementById('add-button').classList.remove('border-gray-300');
// document.getElementById('add-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
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
handleButtonToggle('cashout-button');

// const formsBtns = document.getElementsByClassName('form-btn');
// // console.log(formsBtns);

// for (const btn of formsBtns) {
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
//     btn.classList.add('border-gray-300');
// }
// document.getElementById('cashout-button').classList.remove('border-gray-300');
// document.getElementById('cashout-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');


})



  document.getElementById('transfer-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('transfer-money-parent').style.display = 'block';
handleToggle('transfer-money-parent');
handleButtonToggle('transfer-button');
// const formsBtns = document.getElementsByClassName('form-btn');
// // console.log(formsBtns);

// for (const btn of formsBtns) {
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
//     btn.classList.add('border-gray-300');
// }
// document.getElementById('transfer-button').classList.remove('border-gray-300');
// document.getElementById('transfer-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');

})

  document.getElementById('get-bonus-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('get-bonus-parent').style.display = 'block';
handleToggle('get-bonus-parent');
handleButtonToggle('get-bonus-button');
// const formsBtns = document.getElementsByClassName('form-btn');
// // console.log(formsBtns);

// for (const btn of formsBtns) {
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
//     btn.classList.add('border-gray-300');
// }
// document.getElementById('get-bonus-button').classList.remove('border-gray-300');
// document.getElementById('get-bonus-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');

})

// pay bill
  document.getElementById('pay-bill-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('pay-bill-parent').style.display = 'block';
handleToggle('pay-bill-parent');
handleButtonToggle('pay-bill-button');
// const formsBtns = document.getElementsByClassName('form-btn');
// // console.log(formsBtns);

// for (const btn of formsBtns) {
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
//     btn.classList.add('border-gray-300');
// }
// document.getElementById('pay-bill-button').classList.remove('border-gray-300');
// document.getElementById('pay-bill-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');

})

// transaction 
  document.getElementById('transactions-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
// for(const form of forms){
//     form.style.display = 'none';
// }
// document.getElementById('transactions-parent').style.display = 'block';
handleToggle('transactions-parent');
handleButtonToggle('transactions-button');

// const formsBtns = document.getElementsByClassName('form-btn');
// // console.log(formsBtns);

// for (const btn of formsBtns) {
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
//     btn.classList.add('border-gray-300');
// }
// document.getElementById('transactions-button').classList.remove('border-gray-300');
// document.getElementById('transactions-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
//ok

})



// Log out
document.getElementById('logout-button').addEventListener('click', function() {
    // Perform logout actions
    alert('Logged out successfully');
    window.location.href = './index.html';
});
