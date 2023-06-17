const express = require('express');
const PORT = 5500;
const fs = require('fs');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/verbs', async (req, res) => {
    const readTxt = await fs.promises.readFile('./initialFile/verbs.txt', "utf-8");
    const arrayText = readTxt.split('\n').map(line => line.trim());
    // const uniqueArray = Array.from(new Set(arrayText));
    const uniqueArray = arrayText.filter((item, index) => {
        const baseWord = item.split(' - ')[0].trim();
        return arrayText.findIndex((elem) => elem.split(' - ')[0].trim() === baseWord) === index;
      });
    res.json(uniqueArray)
})

app.listen(PORT, (error) => {
    error ? console.error("Error on server start") :
        console.log(`Server running on port ${PORT} ...`);
});
