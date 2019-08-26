'use strict'

let money = +prompt("Ваш месячный доход?", ""); // Доход за месяц
let income = 'Фриланс'; // Доп доход
//Расходы
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",""); 
console.log(addExpenses.split(', '));

let deposit = confirm("Есть ли у вас депозит в банке?"); 
console.log(deposit);

console.log('Типы данных: ' + ' ' + typeof money, typeof income, typeof deposit);


for (let i = 0; i < 2; i++) {
	switch (i) {
		case 0:
			var question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", ""); 
			var costs1 = +prompt("Во сколько это обойдется?", ""); 
			break;
		case 1:
			var question2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", ""); 
			var costs2 = +prompt("Во сколько это обойдется?", ""); 
		break;
		default:
		break;
	}
	
	
}
console.log(question1,question2,costs1,costs2);

let budgetMonth = money - costs1 - costs2;
console.log(budgetMonth);

let mission = 10000000; 
let sum = Math.ceil(mission/budgetMonth);
console.log(sum);

let period = 12;
let budgetDay = Math.floor(budgetMonth/30); //Бюджет на день
console.log(budgetDay);

let	balance = money%30; // Остаток от деления
if (budgetDay>=800) {
	alert("Высокий уровень дохода")
} else if(budgetDay >= 300 && budgetDay < 800){
	alert("Средний уровень дохода")
} else if(budgetDay >= 0 && budgetDay < 300){
	alert("Низкий уровень дохода")
} else if(budgetDay < 0){
	alert("Что то пошло не так")
}



// console.log('Типы данных: ' + ' ' + typeof money, typeof income, typeof deposit);
// console.log('Длина строки "Фриланс": ' + ' ' + income.length);
// console.log('Период:'+ ' ' + period + ' ' +'месяцев\n' 
// 			+ 'Цель: заработать'+' ' + mission + ' ' + 'рублей');
// console.log('Дополнительные расходы:' + ' ' + addExpenses.toLowerCase().split(', ')); 	
// console.log('Бюджет на день:' + ' ' + budgetDay + '\n' + 'Остаток от деления:' + ' ' + balance);

// alert("Хочу спать!");
// console.log("Дима, пойдем спать");



