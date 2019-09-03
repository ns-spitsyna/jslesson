'use strict';
let arr = ["2222222", "409999", "45755", "1111111", "717171", "68879888", "4785966"];
for (let i = 0; i < arr.length; i++){
	(arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) ? 
	console.log ('Числа, которые начинаются с цифры 2 или 4' + ' ' + arr[i]) : " " ;
};

let n = 100;
nextNumber:
for (let i = 2; i < n; i++){
	for (let j = 2; j < i; j++){
		let x = i % j;
		if (x == 0) continue nextNumber;

	}
	
	console.log(i + ' ' + 'Делители этого числа: 1 и' + ' ' + i);
}





