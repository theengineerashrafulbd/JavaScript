
// Logical Operator
// && (AND), || (OR), ! (NOT)

var age = 20;
var hasID = true;

// AND (&&)
// দুটি Condition-ই true হতে হবে।
console.log(age >= 18 && hasID == true); 
// Output: true


// OR (||)
// যেকোনো একটি Condition true হলেই Result true হবে।
console.log(age >= 18 || hasID == false);
// Output: true


// NOT (!)
// true-কে false এবং false-কে true করে।
var isStudent = true;

console.log("Student: " + !isStudent);
// Output: false

console.log(!(25>20));  //here Condition true but Not(!) true কে false output দেবে 
console.log(!(25<20));
