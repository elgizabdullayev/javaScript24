// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
let a = getRandom();
let answer = ""

for (let i = 2; i<a; i++ ){
    if(a % i === 0){
       answer = `Число ${a} является составным.`;
        break;
    }
    else if (a===0){
        answer =  `Число равно нулю.`;
    }
    else {
       answer =  `Число ${a} является простым.`;
    }
}
console.log(answer);
function getRandom(){
    return Math.floor(Math.random() * 100);
}