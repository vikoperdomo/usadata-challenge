'use strict';

const csv = require('csvtojson')
const fs = require('fs')

const csvToJSon = (pathToFile, outputFileName) => {
    try {
        csv()
            .fromFile(pathToFile) // Reading the file using pathname
            .then((json) => {
                // Adding a special attribute called ‘rowIndex’
                json.forEach((item, i) => {
                    item.rowIndex = i + 1;
                });
                console.info("Result", json) // Result Output on Console Info
                generateJSONFile(json, outputFileName); // call a function to save the data in a json file
            })
    } catch (err) {
        console.error(err)
    }
}

const generateJSONFile = (data, file_name) => {
    try {
        fs.writeFileSync(`${file_name}.json`, JSON.stringify(data), "utf-8")
    } catch (err) {
        console.error(err)
    }
}


module.exports = {
    csvToJSon
};