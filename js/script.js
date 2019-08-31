'use strict';

let money = +prompt("Ваш месячный доход?", ""); // Доход за месяц
let income = 'Фриланс'; // Доп доход
//Расходы
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","asdfg,asdfgh,sdfgh"); 
// console.log(addExpenses.split(', '));

let deposit = confirm("Есть ли у вас депозит в банке?"); 
// console.log(deposit);
let summ = 0;
let costs;
let budgetMonth;
let mission;
let sum;
let period = 12;


let showTypeOf = (data) => typeof (data);

console.log('Типы данных: ' + ' ' + showTypeOf(money), showTypeOf(income), showTypeOf(deposit));

//Функция возвращает сумму всех расходов за месяц

function getExpensesMonth() {	

	for (let i = 0; i < 2; i++) {
	switch (i) {
		case 0:
			let question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "asdfgh"); 
			break;
		case 1:
			let question2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "lkjhgf"); 
			
		break;
		default:
		break;
	};
	costs = +prompt("Во сколько это обойдется?", "5000"); 
	summ +=  costs;
	
};
	
	return summ;
	

};

//Накопления за месяц (Доходы минус расходы)

function getAccumulatedMonth(){
	budgetMonth = money - getExpensesMonth();
	return budgetMonth;
}
let accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц: ' + ' ' + accumulatedMonth);

//за какой период будет достигнута цель, зная результат месячного накопления

function getTargetMonth(mission = 10000000){
	
	sum = Math.ceil(mission/accumulatedMonth);
	return sum;

};

console.log('Cрок достижения цели (месяцы):'+ ' ' + getTargetMonth());


let budgetDay = Math.floor(accumulatedMonth/30); //Бюджет на день
// console.log(budgetDay);

let	balance = money%30; // Остаток от деления


let getStatusIncome = function(budgetDay){
	if (budgetDay >= 800) {
		return "Высокий уровень дохода"
	} else if(budgetDay >= 300 && budgetDay < 800){
		return "Средний уровень дохода"
	} else if(budgetDay >= 0 && budgetDay < 300){
		return "Низкий уровень дохода"
	} else if(budgetDay < 0){
		return "Что то пошло не так"
	}
}
console.log('Уровень дохода: ' + ' ' + getStatusIncome(budgetDay));



// console.log('Типы данных: ' + ' ' + typeof money, typeof income, typeof deposit);
// console.log('Длина строки "Фриланс": ' + ' ' + income.length);
// console.log('Период:'+ ' ' + period + ' ' +'месяцев\n' 
// 			+ 'Цель: заработать'+' ' + mission + ' ' + 'рублей');
// console.log('Дополнительные расходы:' + ' ' + addExpenses.toLowerCase().split(', ')); 	
// console.log('Бюджет на день:' + ' ' + budgetDay + '\n' + 'Остаток от деления:' + ' ' + balance);

// alert("Хочу спать!");
// console.log("Дима, пойдем спать");



