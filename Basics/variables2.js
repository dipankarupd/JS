var myBoolean = true;
var myString = "Hello World"
var firstNumber = 20;
var secondNumber = 40;
secondNumber = 80;

var myArr = [myBoolean, myString]

var myObject = {
    firstProperty: myArr,
    sumProperty: (firstNumber + secondNumber)
}

console.log(myObject)
console.log(myObject.sumProperty)
console.log(myObject.firstProperty[1])