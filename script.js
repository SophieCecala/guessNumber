
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generatedNumber = getRandomArbitrary(1,100);
console.log(generatedNumber);


let answer = Number(prompt("Enter your guess"));
while( answer !== generatedNumber) {
    if (answer < generatedNumber) {
        alert("Oh no. The number is greater");
    } else {
        alert("Oh no. The number is smaller");
    }

    answer = Number(prompt('Try again'));
}

alert("Congratulation!");