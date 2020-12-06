let x1 = getNumber();
let y1 = getNumber();
let x2 = getNumber();
let y2 = getNumber();
function findDistance(x1, x2, y1, y2){
    let distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
    console.log(`Расстояние между точками (${x1},${y1}) и (${x2},${y2}) равно ${distance}.`)
}
findDistance(x1, x2, y1, y2);

function getNumber(){
    return Math.floor(Math.random() * 20)-10;  
 }