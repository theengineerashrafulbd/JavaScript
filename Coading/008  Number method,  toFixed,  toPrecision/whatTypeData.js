//008.1: Number Method, toFixed, toPrecision

var num1 = "Ashraful";
var num2 = 20;  //number কখনো double " " এ হবে না, এতে number টা string এর আচরণ করবে।

// number to String convert
var num3 = 50;
num3 = toString(num3);  //toString() দিয়ে num3 কে number থেকে String এ convert করা হয়েছে। 

//String to float number convert
var num4 = "70";  //String হিসেবে আছে। 

num4 = parseInt(num4);   //number এ কনভার্ট হয়ে গেছে 

var num5 = "70.55";
num5 = parseFloat(num5);  //float number বা float String কে number এ convert করার জন্য 


console.log("num1: " + typeof(num1));
console.log("num2: " + typeof(num2));

console.log("num3: " + typeof(num3));

console.log("num4: " + typeof(num4));

console.log("num5: " + typeof(num5));
