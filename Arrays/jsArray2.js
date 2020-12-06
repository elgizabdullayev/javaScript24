let nums = [];
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Число номер: ${i+1} = ${nums[i]}`);
}
let temp = nums[0];
for(let m = 1; m<nums.length; m++){
if(temp<nums[m]){
    temp = nums[m];
}

}
console.log(`Максимальный элемент массива: ${temp}`);

function getNumber(){
   return Math.floor(Math.random() * 100);  
}