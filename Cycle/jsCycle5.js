let num = getNumber();
let strNum = num.toString();
let result = 0;

for(let i = 0; i<strNum.length; i++){
   result += parseInt(strNum[i])
}
console.log(`Сумма цифр числа ${num} равно ${result}.`);

function getNumber(){
    return Math.floor(Math.random() * 1000);  
 }