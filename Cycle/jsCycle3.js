// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

let num = getRandom();
let i=0;

if(num>0){
   do{
        i += 1;
        if(i*i>num){
            break;
        }
   }
   while(i*i!==num)
   console.log(`Корень ${num} = ${i}.`)
   if(i*i>num){
       console.log(``)

   }
}
else{
    console.log(`Число меньше ноля.`)
}
function getRandom(){
    return Math.floor(Math.random() * 201)-100;
}