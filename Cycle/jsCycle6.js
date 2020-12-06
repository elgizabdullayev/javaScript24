let num = getNumber();
let strNum = num.toString();
let result = [];
let l = strNum.length - 1
let newNum = ""

for(let i = 0; i<strNum.length; i++){
   result[l] = strNum[i];
   l--;
}
for(let i = 0; i<result.length; i++){
    newNum += result[i]
}
 
console.log(`Зеркальное отражение числа ${num} равно ${newNum}.`);

function getNumber(){
    return Math.floor(Math.random() * 1000);  
 }