const analyze = require('./index');
const auth = require('./auth');
const chat = require('./chatbot');
const write = require('./writeToFile');
const day = require('./getDayandDate');

const main = async function () {
    // TODO: add auth functionality
    var today = day.getDayofWeek();
    var date = day.getToday();
    var input = await chat.answers();
    var concat = input.join();
    var summarize = await analyze.summarize(concat);
    console.log("Summary: " + summarize["summary"]);
    var sentiment = await analyze.classify(concat);
    console.log("Sentiment: " + sentiment["classifications"][0]["prediction"], "; Confidence: " + sentiment["classifications"][0]["confidence"]);
    write.writeToFile(date, day, summarize["summary"], sentiment["classifications"][0]["prediction"], sentiment["classifications"][0]["confidence"]);
}

main();