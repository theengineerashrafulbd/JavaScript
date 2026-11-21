// এখানে direct number এ convert করে নিয়েছে। আলাদা করে parseInt(), parseFloat() tag ব্যবহার করা লাগে নাই।
console.log("Number 12: " + Number("12"));

//কোন type এর data তা direct বলে দিবে 
console.log("Number 13: " + Number("13.567"));  

console.log("Number 14: " + typeof(Number(14)));

console.log("Number 15: " + typeof(Number(15.456)));

console.log("Bulean Number: " + Number(true));
