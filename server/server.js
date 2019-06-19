const express = require('express');
const app = express();
const { colorArr } = require('./imgConverter');
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/image', (req, res) => {
    res.json(colorArr);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))