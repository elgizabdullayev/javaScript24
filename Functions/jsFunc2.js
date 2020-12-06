let oneNum = [`Ноль`,`Один`, `Два`,`Три`, `Четыре`,`Пять`, `Шесть`,`Семь`, `Восемь`,`Девять`];                         
let hundreds = [`Сто`, `Двести`,`Триста`, `Четыреста`,`Пятьсот`, `Шестьсот`,`Семьсот`, `Восемьсот`,`Девятьсот`];                                                
let tenPlus = [`Деcять`,`Одиннадцать`, `Двенадцать`,`Тринадцать`, `Четырнадцать`,`Пятьнадцать`, `Шестьнадцать`,`Семьнадцать`, `Восемьнадцать`,`Девятнадцать`];
let tens = [`Двадцать`,`Тридцать`, `Сорок`,`Пятьдесят`, `Шестьдесят`,`Семьдесят`, `Восемьдесят`,`Девяносто`];

let number = getNumber();

let strNumber = number.toString();
let result = ""
if(strNumber.length === 1){
result += oneNum[strNumber[0]]
}
if(strNumber.length === 2){
    if(number>=10 && number<20){
        result += tenPlus[number-10]
    }
    else if(number>=20){
        result += tens[strNumber[0]-2]+ ` `+ oneNum[strNumber[1]];
        let splitted = result.replace(`Ноль`,``);
        result = splitted;
    }
}
if(strNumber.length === 3){
    if(strNumber[1] === `0`){
        result += hundreds[strNumber[0]-1]+` `+ oneNum[strNumber[2]];
        let splitted = result.replace(`Ноль`,``);
        result = splitted;
    }
    else
    {
    let partTwo = ``;
    let newNum = strNumber[1] + strNumber[2];
    let mainNum = parseInt(newNum);
    if(mainNum>=10 && mainNum<20){
        partTwo += tenPlus[mainNum-10];
    }
    else if(mainNum>=20){
        partTwo += tens[strNumber[1]-2]+ ` `+ oneNum[strNumber[2]];
    }
    result += hundreds[strNumber[0]-1]+` `+ partTwo;
    let splitted = result.replace(`Ноль`,``);
    result = splitted;
    }
}
console.log(`Число ${number} , прописью: ${result}`)
function getNumber(){
    return Math.floor(Math.random() * 1000);  
}
