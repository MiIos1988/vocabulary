const express = require('express');
const PORT = 5500;
const fs = require('fs');
const path = require('path');
const { readDocx } = require('./readDocx');

const app = express();

async function prepareFile() {
    const allFiles = await fs.promises.readdir(
        path.join(__dirname, 'initialFile')
    );
    const docxFiles = allFiles.filter(file => file.endsWith("docx"))
    const docxData = await readDocx(docxFiles)
}

prepareFile()




app.listen(PORT, (error) => {
    error ? console.error("Error on server start") :
        console.log(`Server running on port ${PORT} ...`);
});
