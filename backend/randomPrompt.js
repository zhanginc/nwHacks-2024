// generates a random prompt from a list located in prompts.json

const prompts = require('./prompts.json');

// Function to generate random number in a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// generates a random prompt from the list of prompts in prompts.json indexed between 0-28
const generate = function () {
    const random = getRandomNumber(0,28);
    return prompts[random];
}

module.exports = { generate };
  