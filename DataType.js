console.log("Hello everyone ... !!! on Console :) ");
document.write("Hello eveyone again !!! :");

var general;
console.log("general Type is '", typeof general, "' having value ", general);

general = 6;
console.log("general Type is '", typeof general, "' having value ", general);

general = "Hello";
console.log("general Type is '", typeof general, "' having value ", general);

general = true;
console.log("general Type is '", typeof general, "' having value ", general);

general = null;
console.log("general Type is '", typeof general, "' having value ", general);

var space = ["moon", "star", "sun"];
console.log("general Type is '", typeof space, "' having value ", space);

var week = new Array("String", 99, true, null);
console.log("Week array Type is '", typeof week, "' having value ", week);

console.log("Week array Type is '", typeof week, "' having value ", week, "and lenght '", week.length, "'");

week.push("Pushed String")
console.log("Week.push('Pushed String') to insert elemen in array, New week array", week, "and lenght '", week.length, "'");

week.pop();
console.log("Week.pop() to remove last index element, New week array ", week, "and lenght '", week.length, "'");

//var a = week.find(99)
console.log("Week[1] having value ", week[1]);

console.log(2 + 3);
console.log("Hello " + "World !!!");
console.log(2 + " Number (Num and String using + operator )");

//prompt("Hi I am rpompt");
var num1 = prompt("Enter Num 1 : ");
console.log(num1 + " is typeof : ", typeof num1);
console.log(num1 + " after parse : ", typeof parseInt(num1));
console.log("Sum of", num1, "and 9 : ", parseInt(num1) + 9);

alert("Hi I am Alert !!!!")

var num = 0;
