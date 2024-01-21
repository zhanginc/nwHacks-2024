const prompts = require('./randomPrompt');
const readline = require('readline');

// setup to read input from console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer.toString());
        });
    });
}

// uses generate() from randomPrompt.js to generate a random question and accept answer as user input for 5 questions and returns input
// as an array of strings. 
const answers = async function () {
    const input = [];
    const promptArray = [];
    var i = 0;
    while (i < 5) {
        var randomPrompt = prompts.generate();
        if (promptArray.includes(randomPrompt)) {
            continue;
        }
        promptArray.push(randomPrompt);
        var userResponse = await askQuestion(randomPrompt + " ");
        input.push(userResponse.toString());
        i++;
    }
    rl.close();
    return input;
};

module.exports = { answers }