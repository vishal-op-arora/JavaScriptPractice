/*
var str = prompt("Enter a number");
var num = parseInt(str);

if ( !isNaN(num) ){

    if ((num % 2) == 0){
        console.log("Number", str, "is even");
    }

    if ((num % 2) != 0) {
        console.log("Number", str, "is odd");   
    }
}

else {
    console.log("Value", str, "is NAN");
}
*/

var str = prompt("Enter a number");
var num = parseInt(str);

if ( !isNaN(num) ){

    if ((num % 2) == 0){
        console.log("Number", str, "is even");
        console.log("Number", str, "is even Tooooooooooooo");
    }

    else {
        console.log("Number", str, "is odd");   
    }
}

else {
    console.log("Value", str, "is NAN");
}


if(num == 1){
    console.log("Value entered by user =",str);
}
else if(num == 2){
    console.log("Value entered by user =",str);
}
else if(num == 3)
    console.log("Value entered by user =",str);

else
    console.log("Value entered by user is wrong");

console.log("************ if else *****************");
var ifelse = false;
if (ifelse) {
    console.log("if Statement");
}
else {
    console.log("else Statement");
}


console.log(" ");
console.log("************ Ternary Operator *****************");

if ((num%2) == 0 ? console.log("Even") : console.log("Odd"));

var str2 = (num%2) == 0 ? "Even" : "Odd" ;

console.log("value entered for str2 = ", str2);

var lucy1 = (num%2) == 0 ? 1 : false;
console.log("value entered for lucy1 = ", lucy1);

(num%2) == 0 ? console.log("Even") : console.log("Odd");

var str2 = (num%2) == 0 ? "Even" : num;

console.log("value entered for str2 = ", str2);

console.log("*****************");

console.log(".........Switch-Case...........");

switch (num) {
    default: 
        console.log("Today is a Holiday");
        break;
    case 1: 
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("today is Monday");
        break;
    case 3:
        console.log("today is Tuesday");
        break;
    case 4:
        console.log("today is Wednesday");
        break;
    case 5:
        console.log("today is Thursday");
        break;
    case 6:
        console.log("today is Friday");
        break;
    case 7:
        console.log("today is Saturday");
      
}


switch(num%7){
    default:
        console.log("Today is Holiday");
    break;
    case 1:
        console.log("today is Sunday");
        break;
    case 2:
        console.log("today is Monday");
        break;
    case 3:
        console.log("today is Tuesday");
        break;
    case 4:
        console.log("today is Wednesday");
        break;
    case 5:
        console.log("today is Thursday");
        break;
    case 6:
        console.log("today is Friday");
        break;
    case 0:
        console.log("today is Saturday");
}
var week = new Array();
var week_array = new Array("Sunday" , "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday");
//console.log("Today is " , week_array[(--num)%7]);
//console.log("Today is " , week_array[(num-1)%7]);

console.log(num);
console.log(num--);
console.log(num);

console.log(num);
console.log(--num);
console.log(num);

//console.log("Today is " , week_array[(num)%7]);

//--num;
//console.log("Today is " , week_array[(num)%7])

var myStr = prompt("Enter baby name ");

switch(myStr){
    
    case "vishal":
        console.log("My Baby");
        break;

    case "lonika":
        console.log("My Baaaby");
        break;

    default:
        console.log("No Baby");
}

var myBool = false;
switch(myBool){
    
    case true:
        console.log("My Baby true");
        break;

    case false:
        console.log("My Baaaby false");
        break;

    default:
        console.log("No Baby");
}