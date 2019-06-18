// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './Components/App.jsx'
const fs = require('fs');
var Jimp = require('jimp');


Jimp.read("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", function (err, image) {
    // image.resize(200, 200);
    // image.quality(60);
    for(let i = 0; i < 756; i++){
        for(let j = 0; j < 599; j ++){
            // fs.appendFileSync('../data/picData.txt', Object.values(Jimp.intToRGBA(image.getPixelColor(j, i))))
            console.log(Jimp.intToRGBA(image.getPixelColor(j, i))); // returns the colour of that pixel e.g. 0xFFFFFFFF
        }
    }
});


// ReactDOM.render(< App />, document.getElementById('root'));