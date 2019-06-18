// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './Components/App.jsx'
const fs = require('fs');
const readline = require('readline');
var Jimp = require('jimp');
var convert = require('color-convert');

// Jimp.read('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', (err, image) => {
//     if (err) throw err;
//     image
//       .resize(100, 100) // resize
//       .quality(60) // set JPEG quality
//       .write('testimg.jpg'); // save
//   });


// Jimp.read("testimg.jpg", function (err, image) {
//     for(let i = 0; i < 100; i++){
//         for(let j = 0; j < 100; j ++){
//             fs.appendFileSync('../data/picData.txt', Object.values((Jimp.intToRGBA(image.getPixelColor(i, j)))) + '\n')
//             // fs.appendFileSync('../data/picData.txt', JSON.stringify((Jimp.intToRGBA(image.getPixelColor(i, j)))))
//             // console.log(Jimp.intToRGBA(image.getPixelColor(i, j))); // returns the colour of that pixel e.g. 0xFFFFFFFF
//         }
//     }
// });

let fromRBGtoHsv = function () {
    let hslArray = [];
    let temp = fs.readFileSync('../data/picData.txt', 'utf8');
    let lines = temp.split('\n');
    lines.forEach((line) => {
        let currentLine = line.split(',');
        let results = currentLine.map((e) => {
            return parseInt(e);
        })
        // console.log(results);
        hslArray.push(convert.rgb.hsl(...results));
    })
    console.log(hslArray); 

    let colorArr = [];
    for(let i = 0; i < colorArr.length; i++){
        // j:0 = h, j:2 = L
        if(colorArr[i][2] < 15){
            // if (L < 15 === 'Black') 
            colorArr.push('Black');
        } else if(colorArr[i][2] > 85) {
            // if (L > 85 === 'White') 
            colorArr.push('White');
        } else if(colorArr[i][0] < 10 || colorArr[i][0] > 330){
            // if(h < 10 || h > 330){ colorArr.push('Red')}
            colorArr.push('Red');
        }
    }
    // if(h > 10 || h < 45){ colorArr.push('Orange')}
    // if(h > 45 || h < 70){ colorArr.push('Yellow')}
    // if(h > 70 || h < 150){ colorArr.push('Green')}
    // if(h > 150 || h < 200){ colorArr.push('Turquoise')}
    // if(h > 200 || h < 270){ colorArr.push('Blue')}
    // if(h > 270 || h < 330){ colorArr.push('Pink')}
}
// fromRBGtoHsv();




// let pickColor = function () {
//     // should be length 10000
//     let colorArray = [];
//     let temp = fs.readFileSync('../data/picData.txt', 'utf8');
//     let lines = temp.split('\n');
//     lines.forEach((line) => {
//         let currentLine = line.split(',');
//         let results = currentLine.map((e) => {
//             return parseInt(e);
//         })
//         // console.log(results);
//         colorArray.push(results);
//     })
//     console.log(colorArray[0][0]); 
// }
// pickColor();


// ReactDOM.render(< App />, document.getElementById('root'));