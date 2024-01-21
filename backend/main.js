const analyze = require('./index');
const auth = require('./auth');
const chat = require('./chatbot');

const main = async function () {
    // TODO: add auth functionality
    var input = await chat.answers();
    var concat = input.join();
    var summarize = await analyze.summarize(concat);
    console.log("Summary: " + summarize["summary"]);
    var sentiment = await analyze.classify(concat);
    console.log("Sentiment: " + sentiment["classifications"][0]["prediction"], "; Confidence: " + sentiment["classifications"][0]["confidence"]);
}

main();