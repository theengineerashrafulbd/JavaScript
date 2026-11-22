
/* 🛠️ Personal Budget Tracker Challenge (Phase 4 - Arithmetic Operators) */

/*
📌 Challenge Requirements:
Use arithmetic operators (+, -, *, /, %) to:
- Calculate total expenses.
- Apply tax deduction (10% of income).
- Calculate savings percentage (20% of remaining balance).
- Display all calculations in console.
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

// Calculate Net Income After Tax
var netIncome = income - tax;

// Calculate Remaining Balance
var balance = netIncome - totalExpenses;

// Calculate Savings (20%)
var savings = (balance * 20) / 100;


// Display Output
console.log("📊 Personal Budget Tracker");
console.log("🧑‍🎓User: " + user);
console.log("💰 Total Income: $" + income);
console.log("💸 Total Expenses: $" + totalExpenses);
console.log("📉 Tax Deducted (10%): $" + tax);
console.log("💵 Net Income After Tax: $" + netIncome);
console.log("🟢 Remaining Balance: $" + balance);
console.log("💾 Savings (20% of balance): $" + savings);
