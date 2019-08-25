var num = 266219;
var arrNum = num.toString().split(''); //Перевела в строку, разбила на массив
// Произведение чисел

var result = arrNum.reduce(function (mult, current){
		return mult*current;
	});


// Возведение в степень
var exponentiation = (result**3).toString().slice(0,2);
	
console.log(exponentiation);
