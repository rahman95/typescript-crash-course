// arguments and result expect number type
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 5); // 6
// arguments with nullable type and string return
function fullName(firstName, lastName, nickname) {
    if (typeof nickname === "undefined") {
        return `${firstName} ${lastName}`;
    }
    return `${firstName} (${nickname}) ${lastName}`;
}
fullName("Rahman", "Younus"); // Rahman Younus
fullName("John", "Doe", "JD"); // John (JD) Doe
// void return
function doSomething() {
    console.log("Doing something");
}
//# sourceMappingURL=functions.js.map