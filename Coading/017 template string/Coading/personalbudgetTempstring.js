
/* Personal Budget Tracker
   Phase 4 - Arithmetic Operators
*/

// User Information
var user = "Ashraful Islam";

// Total Income
var income = 5000;

// Expenses
var rent = 1200;
var groceries = 600;
var transport = 300;
var entertainment = 200;

// Calculate Total Expenses
var totalExpenses = rent + groceries + transport + entertainment;

// Calculate Tax (10%)
var tax = (income * 10) / 100;

// Net Income After Tax
var netIncome = income - tax;

// Remaining Balance
var balance = netIncome - totalExpenses;

// Calculate Savings (20%)
var savings = (balance * 20) / 100;


// Display Output Using Template String
console.log(`📊 Personal Budget Tracker
🧑‍🎓 User: ${user}
💰 Total Income: $${income}
💸 Total Expenses: $${totalExpenses}
📉 Tax Deducted (10%): $${tax}
💵 Net Income After Tax: $${netIncome}
🟢 Remaining Balance: $${balance}
💾 Savings (20% of balance): $${savings}`);

/* 
console.log(`📊 Personal Budget Tracker App`);
console.log(`User: ${userName}`);
console.log(`💰 Total Income: $${income}`);
console.log(`💸 Total Expenses: $${totalExpenses}`);
console.log(`📉 Tax Deducted (10%): $${tax}`);
console.log(`💵 Net Income After Tax: $${netIncome}`);
console.log(`🟢 Remaining Balance: $${balance}`);
console.log(`💾 Savings (20% of balance): $${savings}`);
*/