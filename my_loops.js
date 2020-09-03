/*var num = parseInt (prompt("Enter number"));
while(num>5 && num<11){
    
    if (num == 8);
    
    else
        console.log("Number is ", num);
    
    num++;
}
console.log("Exit while loop");

console.log("/Another variety of same thing/");

while(num>5 && num<15){
    
    if (num != 12)
    {
        console.log("Number is ", num);
    }
    
    num++;
}
console.log("Exit while loop"); 


console.log("While with sub-while");


while(num>5 && num<11){
    
    while (num != 8){
    
        console.log("Number is ", num);
        break;
    }
    
    num++;
}
console.log("Exit while loop"); 

console.log("'/***While with 2 variables***'/");


while(num>5 && num<11){

    var two = 8;
    
    while (num != 8 && two == 8){
    
        console.log("Number is ", num);
        two++

    }
    
    num++;
}
console.log("Exit while loop"); 

while(num>5 && num<11){

    var two = num;
    
    while (two != 8){
    
        console.log("Number is ", num);
        two = 8;
    }
    
    num++;
}
console.log("Exit while loop"); 

console.log("\\\\hello\v\t you.\n \"byeeee\'");

console.log ("/******do-while******'/");

do{
    if(num!=8)
        console.log("Number is", num);
        
    num++;
} while(num>5 && num<12)  

console.log("******** For Loop 1 ********");

for (var num = 1; num<10; num = num+2){
    console.log("Number value is", num);
} 

console.log("******** For Loop 2 ********");



for (var num = 0; num<10; num++){
var b = 1;
  for (var a = 1; a <= num; a++){
        b = b * a;
    }
    console.log ("Factorial of Number", num, "is =", b);
} 

var array = new Array("one", "two", "three", 5, false);
for(each in array){
    console.log(array[each],each);
}

for(var n=0; n < array.length; n++){
    console.log("at index", n, "=", array[n]);
}

var array1 = "qwrtyi";
for(each in array1){
    console.log(array1[each],each); 
} */
// ispresent
// isPresent - camelCaseWriting

// var array1 = "qwr@@#tyi";
// var specialChar = "~!@#$%^&*()_+:";
// for(each in array1){
//     for(every in specialChar){
//         if(array1[each] == specialChar[every])
//         console.log(array1[each], "=", specialChar[every]);
//     }
// }

var array1 = "qwr@@#tyi";
var specialChar = "~!@#$%^&*()_+:";
var chars = "";
var isPresent = false;

for(each in specialChar){
    for(every in array1){
        if(array1[every] == specialChar[each]){
            chars = chars + specialChar[each];
            isPresent = true;
        }
    }
}

if (isPresent)
    console.log(chars);