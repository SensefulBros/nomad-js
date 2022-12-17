// Object *************************
const Eddy = {
    age: 36,
    love: "Heather",
    current: "woking out",
}

console.log(Eddy);
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

// Hands on
const greet = {
    name: "eddy",
    Hello: function (hi){
        console.log("Hello " + hi + " Nice to meet you");
    },
};

console.log(greet.name);
greet.Hello("Eddy")