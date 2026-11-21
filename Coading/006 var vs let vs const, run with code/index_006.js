// var vs let vs const variables

//variable এর value redeclear করা যাবে and variable এর value change করা যায় 
var fullName = "Md Ashraful Islam";
var fullName = "Sadia Mim Choya";
console.log(fullName);

//variable এর value redeclear করা যাবে না কিন্তু variable এর value change করা যায়
let age = '25';
let age2 = "27";
console.log(age2);

//const এর value redeclear করা যায় না এমনকি value assign বা change ও করা যায় না 
const village = "Satkhira";
console.log(village);