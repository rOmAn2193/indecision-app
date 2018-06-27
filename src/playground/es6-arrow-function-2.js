// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


const user = {
    name: 'Justin',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacedLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacedLived();
// this keyword - no longer bound

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiplyBy());