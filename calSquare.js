//Named Function
function nCalSquare(a) {
    return a * a;
}

console.log("calling named function :", nCalSquare(9));

//Anonymous Function
var aCal = function (b) {
    return b * b;
}
console.log("calling anonymous function :", aCal(9));

//Constructor Function
var cCal = new Function("c", "return c*c;");
console.log("calling constructor function :", cCal(9));

//Self-Invoing Function

(function (s) {
    console.log("calling self-invoing function :", s * s);
})(9)

//or 

console.log("calling self-invoing function :", (function (s) { return s * s; })(9))

//Closure 
var add = (function () {
    var counter = 0;
    return function () { return counter += 1; }
})();
//console.log("Counter is", add());