var money = 35000; // Доход за месяц
var income = 'Фриланс'; // Доп доход
var addExpenses = 'Коммуналка, проезд, связь'; //Расходы
var deposit = true; 
var mission = 10000000; 
var period = 12;
var budgetDay = (money/30).toFixed(2); //Бюджет на день
var	balance = money%30; // Остаток от деления


console.log('Типы данных: ' + ' ' + typeof money, typeof income, typeof deposit);
console.log('Длина строки "Фриланс": ' + ' ' + income.length);
console.log('Период:'+ ' ' + period + ' ' +'месяцев\n' 
			+ 'Цель: заработать'+' ' + mission + ' ' + 'рублей');
console.log('Дополнительные расходы:' + ' ' + addExpenses.toLowerCase().split(', ')); 	
console.log('Бюджет на день:' + ' ' + budgetDay + '\n' + 'Остаток от деления:' + ' ' + balance);

// alert("Хочу спать!");
// console.log("Дима, пойдем спать");


