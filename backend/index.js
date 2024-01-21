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


const summarize = async function (input) {
    const response = await cohere.summarize({
        text: input.toString(),
        format: "paragraph", model:"command-light", length: "short", temperature:0.5, extractiveness:"medium", 
        additionalCommand:"Generate a summary with emphasis on emotions. Always enforce first person."
    });

    return response;

    fs.writeFileSync("summary.json", JSON.stringify(response));
}; 

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