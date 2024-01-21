const prompts = require('./randomPrompt');
const readline = require('readline');

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

const answers = async function () {
    const input = [];
    var i = 0;
    while(i < 5) {
        var userResponse = await askQuestion(prompts.generate() + " ");
        input.push(userResponse.toString());
        i++;
    }
    rl.close();
    return input;
};

module.exports = { answers }