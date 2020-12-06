let sum = 0;
let nums = [];
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Число с индексом: ${i} = ${nums[i]}`);
    if(i % 2 !== 0){
        sum+= nums[i];
    }
}
console.log(`Сумма элементов массива с нечетными индексами равна ${sum}.`)
function getNumber(){
    return Math.floor(Math.random() * 100);  
 }