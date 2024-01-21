const fs = require('fs');
let jo = {};

const filePath = 'summary.json';
const rawData = fs.readFileSync(filePath);
const jsonArray = JSON.parse(rawData);

console.log(JSON.stringify(jsonArray));

const writeToFile = function (date, day, summary, sentiment, confidence) {
    newData(date, day, summary, sentiment, confidence);

    // Add the new data as a separate object in the existing data
    jsonArray.push(jo)

    // Convert the updated data to a JSON string
    const updatedJsonString = JSON.stringify(jsonArray, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFileSync(filePath, updatedJsonString);

    console.log('New data has been added as a separate object to', filePath);
}

const newData = function (date, day, summary, sentiment, confidence) {
    jo.date = date;
    jo.day = day;
    jo.summary = summary;
    jo.sentiment = sentiment;
    jo.confidence = confidence;
}

writeToFile(22012024, "Sunday", "ABC", "angry", 0.999);

module.exports = { writeToFile };