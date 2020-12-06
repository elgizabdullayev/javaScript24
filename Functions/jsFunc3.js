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
 
function getNumber(){
    return Math.floor(Math.random() * 1000);  
}
 
//we got number in result
 
let converted = "";
var parsedNums = [];
parsedNums = result.split(" ");
numForParse = parsedNums.filter(eliminate => {
    return eliminate != null && eliminate != '';
  });
var gotResult = false;
if(numForParse.length===3){
 
   for(let e = 0; e<hundreds.length; e++){
          if( numForParse[0] === hundreds[e]){
              converted += `${e+1}`;
          }
    }
   
    for(let e = 0; e<tens.length; e++){
        if( numForParse[1] === tens[e]){
            converted += `${e+2}`;
            if(numForParse.length === 2){
                converted += `0`;
            }
        }
    }
    for(let e = 0; e<tenPlus.length; e++){
        if( numForParse[1] === tenPlus[e]){
            converted += `${e+10}`;
        }
    }
    for(let e = 0; e<oneNum.length; e++){
    if( numForParse[2] === oneNum[e]){
        converted += `${e}`;
    }
}
}
else if(numForParse.length===2){
    for(let e = 0; e<hundreds.length; e++){
        if( numForParse[0] === hundreds[e]){
            converted += `${e+1}`;
            if(!tens.includes(numForParse[1]) && !tenPlus.includes(numForParse[1])){
                converted += `0`;
            }
        }
    }
 
  for(let e = 0; e<tenPlus.length; e++){
    if( numForParse[1] === tenPlus[e]){
        converted += `${e+10}`;
    }
}
    for(let e = 0; e<tens.length; e++){
           if( numForParse[0] === tens[e]){
               converted +=`${e+2}`;
           }
     }
     for(let e = 0; e<tens.length; e++){
        if( numForParse[1] === tens[e]){
            converted += `${e+2}0`;
        }
  }
     for(let e = 0; e<oneNum.length; e++){
         if( numForParse[1] === oneNum[e]){
             converted += `${e}`;
         }
     }
}
 else if(numForParse.length===1){
    for(let e = 0; e<tens.length; e++){
        if( numForParse[0] === hundreds[e]){
            converted += `${e+1}00`;
        }
  }
    
    for(let e = 0; e<tens.length; e++){
        if( numForParse[0] === tens[e]){
            converted += `${e+2}0`;
        }
  }
  for(let e = 0; e<tenPlus.length; e++){
    if( numForParse[0] === tenPlus[e]){
        converted += `${e+10}`;
    }
}
    for(let e = 0; e<oneNum.length; e++){
           if( numForParse[0] === oneNum[e]){
               converted += `${e}`;
           }
     }
}
let final =``;
 
for(let m = 0; m < numForParse.length; m++){
    final +=` ` +  numForParse[m]
}
 
console.log(`Ваше число: ${final}, конвертированное число: ${converted}.`)
