let name = 'alex'
let money = 10000
let account = 7777

let nameOfaccount = prompt('Whats ur name')

if(nameOfaccount.toLowerCase().includes(name)) {
    alert('Welcome')
} else{
    alert('User is not finded')
}

let numOfAccount = prompt('The code of account')

if(numOfAccount.includes(account)) {
    alert('Succes')
} else{
    alert('The is invalid or wrong')
}

let moneyForCashOut = prompt('How many cash u want out')

if(moneyForCashOut<=money) {
    alert('succes')
} else {
    alert('u don have too many money')
}

alert(`${moneyForCashOut} u cash out, press ok for see a balace`)
alert(`${money-moneyForCashOut} ur balance after cash out`)
alert(`Seeya =)`)