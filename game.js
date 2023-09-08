import inquirer from 'inquirer';
let systemgeneratedNo = Math.floor(Math.random() * 17);
console.log(systemgeneratedNo);
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "write your guess b/w 1--10"
    }
]);
let { userguess } = answers;
if (userguess == systemgeneratedNo) {
    console.log(userguess, "userguess", systemgeneratedNo, "Sys");
    console.log("yeah your answer is correct  \n you win!");
}
else {
    console.log("plz try again better luck next time");
}
