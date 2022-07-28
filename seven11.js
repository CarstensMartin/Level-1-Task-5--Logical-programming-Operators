//Ask User input
let number = prompt("Please enter any number?");


//Give output on consol

if (((number % 7) == 0) && ((number % 11) == 0)) {
    console.log(number, "is divisible by both 7 and 11.");
}
else if ((number % 11) == 0) {
    console.log(number, "is divisible by 11.");
}
else if ((number % 7) == 0) {
    console.log(number, "is divisible by 7.");
}
else {
    console.log(number, "is divisible by neither 7 nor 11.");
}
