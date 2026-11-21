//008.2: Number Method, toFixed, toPrecision

var num = 2.5678;

var num2 = 3.56890;

//toFixed() এর কাজ দশমিক এর পর কয়টা number count করবে টা fixed kora এবং অংকের নিয়ম মতো দশমিক এর পর ৪ এর বেশি হলে পরের number print করবে।
console.log(num.toFixed(2)); 

//toPrecision() এর কাজ মোট কয়টা number print করবে টা বলে দেওয়া। এটা মোট number হিসেব করে, দশমিকের পর থেকে নয়!!
console.log(num2.toPrecision(2)); 