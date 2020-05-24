console.log(" ");
console.log("********************* Named Functions **********************");
function myFun() {
    console.log("myFun");
}

myFun();

function addNum(a, b) {
    console.log("function addNum is called");
    return a + b;
}

addNum(2, 5);
console.log("Addition is", addNum(2, 3));

console.log(" ");
console.log("********************* Anonymous Functions **********************");

var anno = function (a, b) {
    console.log("Anonymous Function called");
    return a + b;
};
anno(2, 3);

setTimeout(function () { console.log("This message will display after 2 sec -> setTimeout") }, 2000);

console.log(" ");
console.log("********************* Constructor Functions **********************");

var addFunc = new Function("a", "b", "console.log('This is Constructor Functions'); return a+b;");
var c = addFunc(2, 3);
console.log("Constructor Functions output", c)

console.log(" ");
console.log("********************* Self-Invoking Functions **********************");

(function (a, b) {
    console.log("This is self-Invoikng function.");
    return a + b;
})(2, 3);

// Have attention on round brackets 
var sum = (function (a, b) {
    return a + b;
}(2, 3));
console.log("Self-Invoking function sum", sum);
