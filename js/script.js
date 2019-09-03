'use strict';

let data;
function getOneArgument(data){
	data = prompt("Введите строку:", "");

	if(typeof(data) != 'string'){
		return "Не строка!";
	} else {
		return data.replace(/\s+/g, '').slice(0, 29) + '...';
	}
	
};

console.log(getOneArgument(data));