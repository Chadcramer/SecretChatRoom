const express = require('express');
const app = express();

// comment out one or the other to show specific image 
// const { colorArr } = require('./imgConverter');
// const { colorArr } = require('./image3');
const { colorArr } = require('./image2');

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/image', (req, res) => {
    res.json(colorArr);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))