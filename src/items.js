const fs = require("fs");
const path = require("path");
// const stockItems = (function () {})();

// import * as fs from "fs";
// import * as path from "path";

// import fs from "node:fs";
// import path from "node:path";
let directory = fs.opendirSync("./src/assets/picsForProject");
let file;
let listOfItems = [];
let regfile = /(\w+|\d+)\.\w+/;
let stockItems = {};
while ((file = directory.readSync()) !== null) {
  console.log(file.name);
  listOfItems.push(regfile.exec(file.name)[1]);
  stockItems[regfile.exec(file.name)[1]] = {
    fullpath: `${path.resolve(`./assets/picsForProject/${file.name}`)}`,
    price: randomIntFromInterval(10, 100),
  };
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.round((Math.random() * (max - min + 1) + min) * 100) / 100;
}

console.log(stockItems);
