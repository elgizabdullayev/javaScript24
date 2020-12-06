let nums = [];
let newNums = [];
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
}
console.log(`Данный массив:`)
console.log(nums)
let index = nums.length-1;
for(let n = 0; n<10; n++){
    newNums[index]= nums[n];
    index--;
}
console.log(`Реверсированный массив:`);
console.log(newNums)


function getNumber(){
    return Math.floor(Math.random() * 10);  
 }