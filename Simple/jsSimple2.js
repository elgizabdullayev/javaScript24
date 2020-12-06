//2. Определить какой четверти принадлежит точка с координатами (х,у)

let x = getRandom()
let y = getRandom()
if(x>0 && y>0){
    console.log(`Точка - x = ${x}, y = ${y}. Точка находится в первой четверти.`)
}
else if(x>0 && y<0){
    console.log(`Точка - x = ${x}, y = ${y}. Точка находится в четвертой четверти.`)
}
else if(x<0 && y<0){
    console.log(`Точка - x = ${x}, y = ${y}. Точка находится в третьей четверти.`)
}
else if(x<0 && y>0){
    console.log(`Точка - x = ${x}, y = ${y}. Точка находится во второй четверти.`)
}
else if(x=0){
    console.log(`Точка - x = ${x}, y = ${y}. Точка находится на оси X.`)
}
else if(y=0){
    console.log(`Точка - x = ${x}, y = ${y}. Точка находится на оси Y.`)
}

function getRandom(){
    return Math.floor(Math.random() * 201) - 101;
}