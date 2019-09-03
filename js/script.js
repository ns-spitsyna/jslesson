// var number = 5;
// var string = "Хай!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj ={};

// console.log(4/0);
// console.log('string' * 9);
// var v;
// console.log(v);
// obj = {
// 	name: "Jonn",
// 	age: 25,
// 	isMarried: false
// }
// console.log(obj["name"]);
// var arr = ['a','b','c'];
// console.log(arr[0]);

// var x = +prompt("Хай!", "estgdfg");

// console.log(typeof(x));
// var i = 10;
// 	d = 10;
// i++;
// --d;
// console.log(i);
// console.log(d);

//var num = [33721];
// var n = String(num).length;
	
// document.write(num[0]);
// 	for(var i = 0; i < n; i++){
// 		var mult = mult*num[i];

// 	}
// 	var s = Math.pow(num,3);
// 	document.write(mult);
// function getSumNumber(num) {
//     var sum = 1, tmp;
//     while (num) {
//         tmp = num % 10;
//         num = (num - tmp) / 10;
//         sum *= tmp;
//     }
//     return sum;
// }
// var num = 33721;
// var n = String(num).length;
// var digits = num.toString().split('');
// var realDigits = digits.map(Number);


// var result = realDigits.reduce(function(mult = 1, current) {
//   return mult * current
// });

// //alert( result ); 
// console.log(result);

// var s = Math.pow(result,3);
// document.write(s);

'use strict';

// let data;
// function getOneArgument(data){
// 	data = prompt("Введите строку:", "");

// 	if(typeof(data) != 'string'){
// 		return "Не строка!";
// 	} else {
// 		// return "Cтрока!";	
// 		return data.replace(/\s+/g, '').slice(0, 29) + '...';
// 	}
	
// };

// console.log(getOneArgument(data));

let data;
function getOneArgument(data){
	data = prompt("Введите строку:", "");

	if(typeof(data) != 'string'){
		return "Не строка!";
	} else {
		// return "Cтрока!";	
		return data.replace(/\s+/g, '').slice(0, 29) + '...';
	}
	
};

console.log(getOneArgument(data));