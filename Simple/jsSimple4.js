// 4. Посчитать выражение макс (а*б*с,  а+б+с)+3

let a = getRandom();
let b = getRandom();
let c = getRandom();

if(a*b*c > a+b+c){
    console.log(`a = ${a}, b = ${b}, c = ${c}. a*b*c > a+b+c, результат выражения = ${a*b*c +3 }`);
}
else if (a*b*c < a+b+c) {
    console.log(`a = ${a}, b = ${b}, c = ${c}. a*b*c < a+b+c, результат выражения = ${a+b+c +3 }`);
}
else {
    console.log(`a = ${a}, b = ${b}, c = ${c}. a*b*c = a+b+c, результат выражения = ${a+b+c +3 }`);
}
function getRandom(){
    return Math.floor(Math.random() * 201) - 101;
}