'use strict';

var _arguments = arguments;
// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
    console.log(_arguments);
    return a + b;
};
console.log(add(55, 1));

var user = {
    name: 'Justin',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacedLived: function printPlacedLived() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacedLived();
// this keyword - no longer bound

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiplyBy());
