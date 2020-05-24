'use strict';

let money, // Доход за месяц
	sum,
	question,
 	question1, 
	question2,
	
	start = function(){
		 
		 do {
		 	money = +prompt('Ваш месячный доход?', '50000'); // Доход за месяц
		 	console.log('money: ' + ' ' + money);
		 }
		 while(!money);
		 return money;
	};
	start();

let appData = {
	income: {}, // Доп доход
	addIncome: [],
	expenses: {}, // Расходы
	addExpenses: [], // Массив с возможными расходами
	deposit: false,
	mission: 1000000,
	period: 12,
	asking: function(){
	
		//Расходы
		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','asdfg,asdfgh,sdfgh'); 
		appData.addExpenses = addExpenses.toLowerCase().split(',');
		appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
			
			for (let i = 0; i < 2; i++) {
				let costs;	
				let question = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''); 
				
				
				while(!costs){
				 	costs = +prompt('Во сколько это обойдется?', ''); 
				 	 //console.log('costs: ' + ' ' + appData.expenses.costs);
				 }
				// console.log('question: ' + ' ' + appData.expenses.question);
				
				appData.expenses[question] = costs;	
				
			 
			
			}
	
		
		}
};
	appData.asking();
	appData.budget = money;
	appData.budgetDay = 0;
 	appData.budgetMonth = 0;
 	appData.expensesMonth = 0;




// let showTypeOf = data => typeof (data);

// console.log('Типы данных: ' + ' ' + showTypeOf(money), showTypeOf(appData.income), showTypeOf(appData.deposit));

//Функция возвращает сумму всех расходов за месяц


function getExpensesMonth() {	
	let summ = 0;
	// for (let i = 0; i < 2; i++) {
	
	// switch (i) {
	// 	case 0:
	// 		question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата'); 
	// 		break;
	// 	case 1:
	// 		question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Проезд'); 
			
	// 	break;
	// 	default:
	// 	break;
	// }

	// 	let costs;
	 
	// 	while(!costs){
	//  	costs = +prompt('Во сколько это обойдется?', '5000'); 
	 	
	//  }

	for (let key in appData.expenses) {
		let totalExpenses = appData.expenses[key];
		console.log(key, totalExpenses);
		summ += totalExpenses;
	
	}
	console.log('sum:' + summ);
	return summ;
	

};

appData.expensesMonth = getExpensesMonth();

//Накопления за месяц (Доходы минус расходы)
appData.accumulatedMonth = getBudget();
function getBudget(){
	
	let budgetMonth = money - appData.expensesMonth;
	
	return  budgetMonth;
	
	
};

appData.budgetDay = Math.floor(appData.accumulatedMonth/30); //Бюджет на день
console.log('budgetDay:' + appData.budgetDay);

// console.log('Накопления за месяц: ' + ' ' + appData.accumulatedMonth);

//за какой период будет достигнута цель, зная результат месячного накопления

appData.targetMonth = getTargetMonth();
function getTargetMonth(mission){
	
	sum = Math.ceil(appData.mission/appData.accumulatedMonth);

	let y = sum < 0 ? console.log("Цель не будет достигнута") : console.log("Цель достигнута");

	return sum;
	
};
console.log('Расходы за месяц:'+ ' ' + appData.expensesMonth);

console.log('Cрок достижения цели (месяцы):'+ ' ' + appData.targetMonth);




let	balance = money%30; // Остаток от деления

appData.statusIncome = getStatusIncome();
function getStatusIncome(){
	if (appData.budgetDay >= 800) {
		return "Высокий уровень дохода"
	} else if(appData.budgetDay >= 300 && appData.budgetDay < 800){
		return "Средний уровень дохода"
	} else if(appData.budgetDay >= 0 && appData.budgetDay < 300){
		return "Низкий уровень дохода"
	} else {
		return "Что то пошло не так"
	}
};


console.log('Уровень дохода: ' + ' ' + appData.statusIncome);
// console.log(appData);
console.log('Наша программа включает в себя данные: ');
for (let key2 in appData){
	console.log(key2 +': ' + appData[key2]);
}


