'use strict';

let money; // Доход за месяц
let income = 'Фриланс'; // Доп доход
//Расходы
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","asdfg,asdfgh,sdfgh"); 
// console.log(addExpenses.split(', '));

let deposit = confirm("Есть ли у вас депозит в банке?"); 
// console.log(deposit);

let budgetMonth;
let mission;
let sum;
let period = 12;
let question1, 
	question2;

let start = function(){
	 
	 do {
	 	money = prompt('Ваш месячный доход?', '50000'); // Доход за месяц
	 	console.log('money: ' + ' ' + money);
	 }
	 while(isNaN(money) || money === null || money.length === 0 || !money.trim());
};
start();

let showTypeOf = (data) => typeof (data);

console.log('Типы данных: ' + ' ' + showTypeOf(money), showTypeOf(income), showTypeOf(deposit));

//Функция возвращает сумму всех расходов за месяц

function getExpensesMonth() {	
	let summ = 0;
	for (let i = 0; i < 2; i++) {
	switch (i) {
		case 0:
			question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата'); 
			break;
		case 1:
			question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Проезд'); 
			
		break;
		default:
		break;
	}

		let costs;
	 
		while(isNaN(costs) || costs === null || costs.length === 0 || !costs.trim()){
	 	costs = prompt('Во сколько это обойдется?', '5000'); 
	 	console.log('costs: ' + ' ' + costs);
	 }
	summ += +costs;
	 	
	}
	return summ;
};

let expensesMonth = getExpensesMonth();

//Накопления за месяц (Доходы минус расходы)

function getAccumulatedMonth(){
	budgetMonth = money - expensesMonth;
	return budgetMonth;
};

let accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц: ' + ' ' + accumulatedMonth);

//за какой период будет достигнута цель, зная результат месячного накопления

function getTargetMonth(mission = 10000000){
	
	sum = Math.ceil(mission/accumulatedMonth);
	if (sum < 0){
		console.log("Цель не будет достигнута");
	} else {
		console.log("Цель достигнута");

	}
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