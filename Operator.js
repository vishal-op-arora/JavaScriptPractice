// Arithmatic Operator 
console.log("********************* Arithmatic Operator **********************")

var sum = 6 + 3;
console.log("Addition = 6 + 3 =", sum);

var sub = 6 - 3;
console.log("Subtraction = 6 - 3 =", sub);

var mul = 6 * 3;
console.log("Multiplicaton = 6 * 3 =", mul);

var div = 6 / 3;
console.log("Division = 6 / 3 =", div);

var mod = 6 % 3;
console.log("Modulus (Remainder) = 6 % 3 =", mod);

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
console.log("Convert String in upercase str3.toUpperCase() -->", str3 = str3.toUpperCase())
console.log("Slice the string str3.slice(4,) -->", str3.slice(4,));
console.log("Find the index of Lucy str3.indexOf('LUCY') -->", str3.indexOf("LUCY"));

//Assigned Operator 
console.log(" ");
console.log("********************* Assigned Operator **********************")

var num = 6;
console.log("num :", num)
num += 3; // num = num + 3
console.log("Sum Assignement --> num += 3 =", num);

console.log("num :", num)
num -= 3; // num = num-3
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

num1 = 0 ; parseInt(prompt("Enter first number"));
num2 = 1; parseInt(prompt("Enter second number"));

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

num1 = '0'
if (num == num1) {
    console.log("num and num1 have same values.")
}

num2 = "0"
if (num === num2) {
    console.log("num and num2 are of same type and have same value.")
}
else{
    console.log("num and num2 are not of same type")
}

console.log("Check Type equal --> ===");
console.log("Check Type not equal --> !==");

console.log(" ");
console.log("********************* Boolean Operator **********************");


console.log("AND --> &&");
console.log("OR  --> ||");
console.log("NOT --> !");
console.log("NOT Equal -> !=");

str1 = prompt("Enter string 1", "happy");
str2 = prompt("Enter string 2");
str3 = prompt("Enter string 3");

if(str1 == str2){
    if(str2 == str3){
        console.log("value of string 1", str1, "is equal to string 3", str3);
    }
    else{
        console.log("str 2 not equal to str 3");
    }
}
else
    console.log("str1 not equal to str2");


if((str1 == str2) && (str2 == str3)){
console.log("value of string 1", str1, "is equal to string 3", str3);
}
else
    console.log("all 3 strings not same, any 2 might be same");

if((str1 == str2) || (str1 == str3) || (str2 == str3)){
console.log("2 strings have same values");
}
else
    console.log("all strings have diff values");
