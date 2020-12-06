/* 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

Рейтинг 	Оценка
0-19	F
20-39	E
40-59	D
60-74	C
75-89	B
90-100	A*/

let point = getRandom();

if(0<=point && point<=19){
    console.log(`Рейтинг равен ${point}. Оценка - F`)
}
if(20<=point && point<=39){
    console.log(`Рейтинг равен ${point}. Оценка - E`)
}
if(40<=point && point<=59){
    console.log(`Рейтинг равен ${point}. Оценка - D`)
}
if(60<=point && point<=74){
    console.log(`Рейтинг равен ${point}. Оценка - C`)
}
if(75<=point && point<=89){
    console.log(`Рейтинг равен ${point}. Оценка - B`)
}
if(90<=point && point<=100){
    console.log(`Рейтинг равен ${point}. Оценка - A`)
}


function getRandom(){
    return Math.floor(Math.random() * 101);
}