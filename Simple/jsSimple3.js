//3. Найти суммы только положительных из трех чисел

let a = getRandom();
let b = getRandom();
let c = getRandom();
let result = 0;
if(a > 0){
    result += a;
}
if (b>0){
    result += b;
}
if(c>0){
    result += c;
}
console.log(`Числа a = ${a}, b = ${b}, c = ${c}. Сумма равна ${result}.`)
function getRandom(){
    return Math.floor(Math.random() * 201) - 101;
}