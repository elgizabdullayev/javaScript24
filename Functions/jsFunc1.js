let days = [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`];

let dayNumber = getNumber();
if(dayNumber===0){console.log(`Номер дня недели начинается с 1.`)}
else{
console.log(`День номер ${dayNumber} это ${days[dayNumber-1]}`)}


function getNumber(){
    return Math.floor(Math.random() * 7);  
 }