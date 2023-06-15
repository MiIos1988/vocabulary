const express = require('express');
const PORT = 5500;
const fs = require('fs');

const app = express();

async function prepareFile() {
    const readTxt = await fs.promises.readFile('./initialFile/verbs.txt', "utf-8");
    const arrayText = readTxt.split('\n')
    console.log(arrayText[0])
}

prepareFile()




app.listen(PORT, (error) => {
    error ? console.error("Error on server start") :
        console.log(`Server running on port ${PORT} ...`);
});
