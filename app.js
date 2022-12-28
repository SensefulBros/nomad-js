// Array
const Eddyy = [1, "Ed", "/Haed", true]

console.log(Eddyy[2]);
Eddyy[2] = "Headword "
Eddyy.push("Edword")

// Object *************************
const Eddy = {
    age: 36,
    love: "Heather",
    current: "woking out",
}

console.log((Eddy.love = "HEADWORD"));
Eddy.LastName = "Park";
console.log(Eddy); 

// Function *************************
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber)
}

function devide(a, b){
    console.log(a /  b)
}

plus(6, 8)
devide(8, 2)

// Hands on calculator
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    devide: function (a, b) {
        return a / b;
    },
    times: function (a, b) {
        return a * b;
    },
    powerOf: function (a, b) {
        return a ** b;
    },
};

calculator.add(1, 2);

// Return

const age = 33;
function bsAge(bs) {
    return bs + 2;
};

const korAge = bsAge(age);

console.log(korAge);