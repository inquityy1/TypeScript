"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
// Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(`Man United Won ${manUnitedWins} games!`);
