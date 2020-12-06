let num = getNumber()
let result = 1

for(let i = 1; i<=num; i++)
{if(num === 0){
result = 0;
break;
}
else{
result = result * i;
}
}
console.log(`Факториал числа ${num} равен ${result}.`);

function getNumber(){
   return Math.floor(Math.random() * 10 + 1);  
}