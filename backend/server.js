const express = require('express');
const PORT = 5500;
const fs = require('fs');

const app = express();

app.get('/verbs', async (req, res) => {
    const readTxt = await fs.promises.readFile('./initialFile/verbs.txt', "utf-8");
    const arrayText = readTxt.split('\n').map(line => line.trim());
    console.log(arrayText)
    res.json(arrayText)

})






app.listen(PORT, (error) => {
    error ? console.error("Error on server start") :
        console.log(`Server running on port ${PORT} ...`);
});
