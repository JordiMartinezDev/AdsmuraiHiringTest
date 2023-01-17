const csv = "./db/data.csv";
const fs = require("fs");

const filename = csv;
const fileText = fs.readFileSync(filename).toString();
const lines = fileText.split("\n");
const header = lines[0];
const dataLines = lines.slice(1);

module.exports = dataLines;
