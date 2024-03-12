let arrOne=Array.from(Array(10),()=>{return Math.round(Math.random()*20+20)});
console.log(arrOne.toString());

console.log(arrOne.sort().toString());

arrOne.sort((a,b)=>a-b);
console.log(arrOne.toString());

arrOne.sort((a,b)=>b-a);
console.log(arrOne.toString());

let colors=['12','45', '34','2222', '11111111'];
alert(colors.sort());