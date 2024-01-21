const path = require("path");
const express = require("express");
// const cors = require("cors");
const PORT = 3005;
const app = express();
const readline = require('readline');
const fs = require('fs');

// cohere requirements
const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
    token: "93BOuwwCB7ED5t9qjVIYh62RL5TLGamMwnTgGn61",
});

// the summarize function. needs one input string (concatenated with all responses) to generate a paragraph as summary. output appears as
// 'summary' in summary.json.
const summarize = async function (input) {
    const response = await cohere.summarize({
        text: input.toString(),
        format: "paragraph", model:"command-light", length: "short", temperature:0.5, extractiveness:"medium", 
        additionalCommand:"Generate a summary with emphasis on emotions. Always enforce first person."
    });

    return response;

    fs.writeFileSync("summary.json", JSON.stringify(response));
}; 


// the classify emotion function. needs one input string that it adds to a list (requirement of parameter) to generate a label and a confidence
// score. appears as 'sentiment' and 'confidence' in summary.json.
const classify = async function (input) {
    const arr = [];
    arr.push(input);
    const response = await cohere.classify({
      model: "5d19fb2a-638e-4ea8-8a70-8d914ce12452-ft",
      inputs: arr,
      examples: []
    });

    return response;
};

module.exports = { summarize, classify }