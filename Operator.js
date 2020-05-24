// Airthmatic Operator 
console.log("********************* Airthmatic Operator **********************")

var sum = 6 + 3;
console.log("Addition = 6 + 3 =", sum);

var sub = 6 - 3;
console.log("Subtraction = 6 - 3 =", sub);

var mul = 6 * 3;
console.log("Multiplicaton = 6 * 3 =", mul);

var div = 6 / 3;
console.log("Division = 6 / 3 =", div);

var mod = 6 % 3;
console.log("Modules (Remainder) = 6 % 3 =", mod);

var inc = 1;
console.log("inc value :", inc);
inc = inc + 1;
console.log("Increment --> inc = inc + 1 =", inc);
inc++;
console.log("Increment Operation --> inc++ = ", inc);

var dec = 8;
console.log("dec value :", dec);
dec = dec - 1;
console.log("Decrement --> dec = dec - 1 =", dec);
dec--;
console.log("Decrement Operation --> dec-- = ", dec);

//Sring Operatior 
console.log(" ");
console.log("********************* String Operator **********************")
var str1 = "Hi, Where is ";
console.log("str1 -->", str1);
var str2 = "Lucy ... :) ";
console.log("str2 -->", str2)
var str3 = str1 + str2;
console.log("str3 = str1 + str2 -->", str1 + str2);
console.log("str1.concat(str2) -->", str1.concat(str2));
console.log("Charactor Count str3.length -->", str3.length);
console.log("Character at 6 str3.charAt(5) -->", str3.charAt(5));
console.log("Replace Hi with Hello - str3.replace('Hi', 'Hello')-->", str3.replace("Hi", "Hello"));
console.log("Convert String in upercase str3.toUpperCase() -->", str3.toUpperCase())
console.log("Slice the string str3.slice(4,) -->", str3.slice(4,));
console.log("Find the index of Lucy str3.indexOf('Lucy') -->", str3.indexOf("Lucy"));

//Assigned Operatior 
console.log(" ");
console.log("********************* Assigned Operator **********************")

var num = 6;
console.log("num :", num)
num += 3;
console.log("Sum Assignement --> num += 3 =", num);

console.log("num :", num)
num -= 3;
console.log("Subtract Assignement --> num -= 3 =", num);

console.log("num :", num)
num *= 3;
console.log("Multiplication Assignement --> num *= 3 =", num);

console.log("num :", num)
num /= 3;
console.log("Division Assignement --> num /= 3 =", num);

console.log("num :", num)
num %= 3;
console.log("Module Assignement --> num %= 3 =", num);

console.log(" ");
console.log("********************* Comparison Operator **********************");

num1 = parseInt(prompt("Enter first number"));
num2 = parseInt(prompt("Enter second number"));

console.log("num1 -->", typeof num1, num1);
console.log("num2 -->", typeof num2, num2);

if (num1 >= num2) {
    if (num1 == num2) {
        console.log("num1 == num2");
    }
    else {
        console.log("num1 > num2");
    }
}
else {
    console.log("num1 < num2");
}

var num = 0;
console.log("num -->", typeof num);

if (num === num1) {
    console.log("num and num1 are of same type.")
}

if (num === num2) {
    console.log("num and num2 are of same type.")
}

console.log("Check Type equal --> ===");
console.log("Check Type not equal --> !==");

console.log(" ");
console.log("********************* Boolean Operator **********************");

console.log("AND --> &&");
console.log("OR  --> ||");
console.log("NOT --> !");
console.log("NOT Equal -> !=");