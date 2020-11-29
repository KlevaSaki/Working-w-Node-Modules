const fs = require('fs');

const person = {
    name : 'Kleva',
    region: 'Kenya',
    age: 27
}

//returns a json format
const personJSON = JSON.stringify(person);
// console.log(personJSON);

//returns a javascript object
const personObject = JSON.parse(personJSON);
// console.log(personObject);

// fs.writeFileSync('1-json.json', personJSON);
const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);

const unBufferedData = JSON.parse(dataBuffer);
console.log(unBufferedData.name, unBufferedData.region, unBufferedData.age);