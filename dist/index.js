"use strict";
let a = 123n;
let f = 1232n;
console.log(a);
var Flippable;
(function (Flippable) {
    Flippable[Flippable["Burger"] = 0] = "Burger";
    Flippable[Flippable["Chair"] = 1] = "Chair";
})(Flippable || (Flippable = {}));
function Filter1(array, f) {
    return array.filter((val) => f(val));
}
let names = [
    { firstName: 'abc' },
    { firstName: 'bbc' },
    { firstName: 'abc' }
];
let filter = (array, f) => array.filter((val) => f(val));
let filter1 = (array, f) => array.filter((val) => f(val));
Filter1(names, _ => _.firstName.startsWith('b'));
let filter2 = (array, f) => array.filter((val) => f(val));
filter(names, _ => _.firstName.startsWith('b'));
// filter([])
let nums = [1, 2, 3, 4];
// let list<T
// nums.find((num,1, ))
function add(num1, num2) {
    num1 + num2;
}
let result = add(1, 2);
console.log(result);
//# sourceMappingURL=index.js.map