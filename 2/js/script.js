let num = 266219;
let arrNum = num.toString().split(''); //Перевела в строку, разбила на массив
// Произведение чисел

let result = arrNum.reduce((mult, current) => mult*current);

// Возведение в степень
let exponentiation = (result**3).toString().slice(0,2);
	
console.log(exponentiation);
