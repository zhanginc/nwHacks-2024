// generates a random prompt from a list located in prompts.json

const prompts = require('./prompts.json');

// Function to generate random number in a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
const generate = function () {
    const randomArray = [];
    const random = getRandomNumber(0,28);
    while(randomArray.includes(random)) {
        random = getRandomNumber(0,28);
    }
    randomArray.push(random);
    return prompts[random];
}

module.exports = { generate };
  