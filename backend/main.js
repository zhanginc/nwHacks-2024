const analyze = require('./index');
const auth = require('./auth');
const chat = require('./chatbot');
const write = require('./writeToFile');
const day = require('./getDayandDate');

const main = async function () {
    // TODO: add auth functionality

    // refers getDayandDate.js to get date and time (UTC). appears as 'date' and 'day' in summary.json
    var today = day.getDayofWeek();
    var date = day.getToday();

    // refers chatbot.js. output of prompts and input of answers. string is concatenated from input in concat.
    var input = await chat.answers();
    var concat = input.join();

    // calls the summarize function from index.js. generates a short summary from the concatenated response for this day.
    var summarize = await analyze.summarize(concat);
    console.log("Summary: " + summarize["summary"]);

    // calls the classify function from index.js. generates a sentiment label and confidence score from the confiden
    var sentiment = await analyze.classify(concat);
    console.log("Sentiment: " + sentiment["classifications"][0]["prediction"], "; Confidence: " + sentiment["classifications"][0]["confidence"]);
    
    // writes important info to an output json. includes summary, sentiment label and confidence score as well as identifier info (date,day).
    write.writeToFile(date, day, summarize["summary"], sentiment["classifications"][0]["prediction"], sentiment["classifications"][0]["confidence"]);
}

main();