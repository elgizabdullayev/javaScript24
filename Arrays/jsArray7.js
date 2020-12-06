let nums = [];
let newNums = [];
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Данный массив: индекс ${i} = ${nums[i]}`);
}
let count = 0;
for(let n =0; n<nums.length; n++){
    if(nums[n] % 2 !== 0){
        count++;
    }
}
console.log(`Количество нечетных элементов массива равно ${count}.`)



function getNumber(){
    return Math.floor(Math.random() * 100);  
 }