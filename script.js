'use strict';

var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i=0; i < 2; i++) {
	let expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
	let	expensesCost = prompt("Во сколько обойдется?");
	if ((typeof (expensesItem)) === 'string'  && expensesItem != '' && expensesCost != '' 
	&& expensesItem.length < 50 ) {
		appData.expenses[expensesItem] = expensesCost;
	} else	if (expensesItem != '' && expensesCost != ''   ) {
				 expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
				 expensesCost = prompt("Во сколько обойдется?");
		}
}
 appData.moneyPerDay = appData.budget / 30;
/*
while (i<2) {
		let expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
		let expensesCost = prompt("Во сколько обойдется?");
		if ((typeof (expensesItem)) === 'string' && expensesItem != '' && expensesCost != '' &&
			expensesItem.length < 50) {
			appData.expenses[expensesItem] = expensesCost;
		} else if (expensesItem != '' && expensesCost != '') {
			expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
			expensesCost = prompt("Во сколько обойдется?");
		}
}
do {
		let expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
		let expensesCost = prompt("Во сколько обойдется?");
		if ((typeof (expensesItem)) === 'string' && expensesItem != '' && expensesCost != '' &&
			expensesItem.length < 50) {
			appData.expenses[expensesItem] = expensesCost;
		} else if (expensesItem != '' && expensesCost != '') {
			expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
			expensesCost = prompt("Во сколько обойдется?");
		}
}
while (i < 2)
*/
alert("Ежедневный бюджет пользователя: " + appData.moneyPerDay);

if (appData.moneyPerDay<1000) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 3000) {
	console.log("Высокий уровень достатка");
}
