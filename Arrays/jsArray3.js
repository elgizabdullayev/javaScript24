let nums = [];
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Число номер: ${i+1} = ${nums[i]}`);
}
let temp = nums[0];
for(let m = 1; m<nums.length; m++){
if(temp>nums[m]){
    temp = nums[m];
}
let index = 0;
}
for(let n = 1; n<nums.length; n++){
    if(temp===nums[n]){
        index = n;
        break;
    }
}
console.log(`Индекс минимального элемент массива: ${index} и он равен ${temp}.`);

function getNumber(){
   return Math.floor(Math.random() * 100);  
}