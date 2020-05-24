
console.log(" ");
console.log("************ if  *****************");
var ifStat = true;

if (ifStat) {
    console.log("if Statement");
}

console.log(" ");
console.log("************ if else *****************");
var ifelse = false;
if (ifelse) {
    console.log("if Statement");
}
else {
    console.log("else Statement");
}

console.log(" ");
console.log("************ nested if-else *****************");
var ifelseif = true;

if (ifelse) {
    console.log("if Statement");
}
else if (ifelseif) {
    console.log("nested if-else Statement");
}
else {
    console.log("else Statement");
}

console.log(" ");
console.log("************ Ternary Operator *****************");
var myNum = 5;
if (myNum > 4 ? console.log("num >= 5") : console.log(" num < 5"));

console.log(" ");
console.log("************ Switch Case - Without break *****************");

var num = 1;

switch (num) {

    case 0:
        console.log("case 0 - num is", num);

    case 1:
        console.log("case 1 - num is", num);

    case 2:
        console.log("case 2 - num is", num);

    default:
        console.log("case default - num is", num);
}

console.log("************ Switch Case - With break *****************");

switch (num) {

    case 0:
        console.log("case 0 - num is", num);
        break;

    case 1:
        console.log("case 1 - num is", num);
        break;

    case 2:
        console.log("case 2 - num is", num);
        break;

    default:
        console.log("case default - num is", num);
}

console.log("************ Switch Case - default- First *****************");

switch (num) {

    default:
        console.log("case default - num is", num);
        break;

    case 0:
        console.log("case 0 - num is", num);
        break;

    case 1:
        console.log("case 1 - num is", num);
        break;

    case 2:
        console.log("case 2 - num is", num);

}

console.log(" ");
console.log("************ Loop : while *****************");

var num1 = 1;
while (num1 <= 5) {
    console.log("While Loop - num is", num1, "and less than or equal to 5");
    num1++;
}

console.log("************ Loop : do-while *****************");

var num1 = 1;
do {
    console.log("Do - While Loop - num is", num1, "and less than or equal to 5");
    num1++;
} while (num1 <= 5)

console.log("************ Loop : for *****************");

for (var num1 = 1; num1 <= 5; num1++) {
    console.log("for Loop - num is", num1, "and less than or equal to 5");
}

console.log("************ Loop : for ( __ in __ ) *****************");
var subject = ["Math", "Hindi", "English"];
var marks = new Array(95, 85, 90)

for (n in subject) {
    console.log(subject[n], "marks is", marks[n]);
}
var msg = "\n";
for (n in subject)
    msg += subject[n] + " marks is " + marks[n] + "\n";

console.log(msg);
