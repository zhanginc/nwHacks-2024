const path = require("path");
const express = require("express");
const cors = require("cors");
const PORT = 3005;
const app = express();
const readline = require("readline");
const fs = require("fs");

app.use(cors());
app.use(express.json());

// cohere requirements
const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
  token: "93BOuwwCB7ED5t9qjVIYh62RL5TLGamMwnTgGn61",
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// create a GET route
app.get("/express-backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// the summarize function. needs one input string (concatenated with all responses) to generate a paragraph as summary. output appears as
// 'summary' in summary.json.
app.get("/api/summarize", async (req, res) => {
  const concat = req.query.arrayOfAnswers;
  console.log(concat);

  //   res.send({ express: arrayOfAnswers });

  const response = await cohere.summarize({
    text: concat.toString(),
    format: "paragraph",
    model: "command-light",
    length: "short",
    temperature: 0.5,
    extractiveness: "medium",
    additionalCommand:
      "Generate a summary with emphasis on emotions. Always enforce first person.",
  });

  

  return res.json({
    status: "success",
    text: response.summary,
  });
});

// the classify emotion function. needs one input string that it adds to a list (requirement of parameter) to generate a label and a confidence
// score. appears as 'sentiment' and 'confidence' in summary.json.
app.get("/api/sentiment-analysis", async (req, res) => {
  var concat = res.join();
  const arr = [];
  arr.push(concat);
  const response = await cohere.classify({
    model: "5d19fb2a-638e-4ea8-8a70-8d914ce12452-ft",
    inputs: arr,
    examples: [],
  });

  return response;
});

module.exports = {};
