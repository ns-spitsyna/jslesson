'use strict'

let money = +prompt("Ваш месячный доход?", ""); // Доход за месяц
let income = 'Фриланс'; // Доп доход
//Расходы
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","asdfg,asdfgh,sdfgh"); 
// console.log(addExpenses.split(', '));

let deposit = confirm("Есть ли у вас депозит в банке?"); 
// console.log(deposit);

let showTypeOf = function(data){
 return typeof data;
}

console.log('Типы данных: ' + ' ' + showTypeOf(money), showTypeOf(income), showTypeOf(deposit));

// for (let i = 0; i < 2; i++) {
// 	switch (i) {
// 		case 0:
// 			var question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "asdfgh"); 
// 			var costs1 = +prompt("Во сколько это обойдется?", "10000"); 
// 			break;
// 		case 1:
// 			var question2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "lkjhgf"); 
// 			var costs2 = +prompt("Во сколько это обойдется?", "5000"); 
// 		break;
// 		default:
// 		break;
// 	}
	
	
// }
// console.log(question1,question2,costs1,costs2);

//Функция возвращает сумму всех расходов за месяц
let summ;
function getExpensesMonth(costs1, costs2) {	

	for (let i = 0; i < 2; i++) {
	switch (i) {
		case 0:
			var question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "asdfgh"); 
			var costs1 = +prompt("Во сколько это обойдется?", "10000"); 
			break;
		case 1:
			var question2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "lkjhgf"); 
			var costs2 = +prompt("Во сколько это обойдется?", "5000"); 
		break;
		default:
		break;
	}
	
	
}
	summ = costs1 + costs2;
	return summ;

};
let s = getExpensesMonth();

 //console.log('Сумма расходов:'+ ' ' + s);

//Накопления за месяц (Доходы минус расходы)
let budgetMonth;

function getAccumulatedMonth(){
	budgetMonth = money - s;
	return budgetMonth;
}
let accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц: ' + ' ' + accumulatedMonth);

//за какой период будет достигнута цель, зная результат месячного накопления
let mission;
let sum;

function getTargetMonth(){
	mission = 10000000; 
	sum = Math.ceil(mission/accumulatedMonth);
	return sum;

}

console.log('Cрок достижения цели (месяцы):'+ ' ' + getTargetMonth());

let period = 12;
let budgetDay = Math.floor(accumulatedMonth/30); //Бюджет на день
// console.log(budgetDay);

let	balance = money%30; // Остаток от деления


let getStatusIncome = function(){
	if (budgetDay >= 800) {
		return ("Высокий уровень дохода")
	} else if(budgetDay >= 300 && budgetDay < 800){
		return ("Средний уровень дохода")
	} else if(budgetDay >= 0 && budgetDay < 300){
		return ("Низкий уровень дохода")
	} else if(budgetDay < 0){
		return ("Что то пошло не так")
	}
}
console.log('Уровень дохода: ' + ' ' + getStatusIncome());



// console.log('Типы данных: ' + ' ' + typeof money, typeof income, typeof deposit);
// console.log('Длина строки "Фриланс": ' + ' ' + income.length);
// console.log('Период:'+ ' ' + period + ' ' +'месяцев\n' 
// 			+ 'Цель: заработать'+' ' + mission + ' ' + 'рублей');
// console.log('Дополнительные расходы:' + ' ' + addExpenses.toLowerCase().split(', ')); 	
// console.log('Бюджет на день:' + ' ' + budgetDay + '\n' + 'Остаток от деления:' + ' ' + balance);

// alert("Хочу спать!");
// console.log("Дима, пойдем спать");



