//1. Если а – четное посчитать а*б, иначе а+б

let a = getRandom();
let b = getRandom();
let result = 0;
if( a%2 === 0){
   result = a*b;
   console.log(`Число "а" = ${a} - четное , b = ${b} - а*b = ${result}.`)
}
else {
    result = a+b;
    console.log(`Число "а" = ${a} - нечетное, b = ${b} - а+b = ${result}.`)
}

function getRandom(){
    return Math.floor(Math.random() * 201) - 100;
}