const fs = require('fs');
var Jimp = require('jimp');
var convert = require('color-convert');

// // Step one: resize original image

// Jimp.read('https://scontent-lga3-1.cdninstagram.com/vp/1fa58806cb37c48acf8f48daaf221f41/5D6AFEA5/t51.2885-15/sh0.08/e35/c0.50.1080.1080/s640x640/59952105_455796608502061_2293462728868080038_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com', (err, image) => {
//     if (err) throw err;
//     image
//       .resize(151, 120) // resize
//       .quality(95) // set JPEG quality
//       .write('../image3.jpg'); // save
//   });

// // Step two: Convert pixels to RGB colors, save to text file

// Jimp.read("/Users/chadcramer/Desktop/HrImmersive/PixelPictures/image3.jpg", function (err, image) {
//     for(let i = 0; i < 120; i++){
//         for(let j = 0; j < 151; j++){
//             fs.appendFileSync('/Users/chadcramer/Desktop/HrImmersive/PixelPictures/data/image3Data.txt', Object.values((Jimp.intToRGBA(image.getPixelColor(j, i)))) + '\n')
//             // fs.appendFileSync('../data/picData.txt', JSON.stringify((Jimp.intToRGBA(image.getPixelColor(i, j)))))
//             // console.log(Jimp.intToRGBA(image.getPixelColor(i, j))); // returns the colour of that pixel e.g. 0xFFFFFFFF
//         }
//     }
// });


// // Step three: Convert RGB colors to HSL and then push closest color to single array

let colorArr = [];
let fromRBGtoHsv = function () {
    let hslArray = [];
    let temp = fs.readFileSync('/Users/chadcramer/Desktop/HrImmersive/PixelPictures/data/image3Data.txt', 'utf8');
    let lines = temp.split('\n');
    lines.forEach((line) => {
        let currentLine = line.split(',');
        let results = currentLine.map((e) => {
            return parseInt(e);
        })
        hslArray.push(convert.rgb.hsl(...results));
    })

    for(let i = 0; i < hslArray.length; i++){
        // j:0 = h, j:2 = L
        if(hslArray[i][2] < 15){
            // if (L < 15 === 'Black') 
            colorArr.push('black');

        } else if(hslArray[i][2] > 85) {
            // if (L > 85 === 'White') 
            colorArr.push('white');

        } else if(hslArray[i][0] < 10 && hslArray[i][0] > 330){
            // if(h < 10 || h > 330){ colorArr.push('Red')}
            colorArr.push('red');

        } else if(hslArray[i][0] > 10 && hslArray[i][0] < 40){
            // if(h > 10 || h < 45){ colorArr.push('Orange')}
            colorArr.push('orange');

        } else if(hslArray[i][0] > 40 && hslArray[i][0] < 70){
            colorArr.push('yellow');

        } else if(hslArray[i][0] > 70 && hslArray[i][0] < 150){
            // if(h > 70 || h < 150){ colorArr.push('Green')}
            colorArr.push('green');

        } else if(hslArray[i][0] > 150 && hslArray[i][0] < 200){
            // if(h > 150 || h < 200){ colorArr.push('Turquoise')}
            colorArr.push('turquoise');

        } else if(hslArray[i][0] > 200 && hslArray[i][0] < 270){
            // if(h > 200 || h < 270){ colorArr.push('Blue')}
            colorArr.push('blue');

        } else if(hslArray[i][0] > 270 && hslArray[i][0] < 330){
            // if(h > 270 || h < 330){ colorArr.push('Pink')}
            colorArr.push('pink');

        } else {
            colorArr.push('black');
        }
    }
    
}

fromRBGtoHsv();

module.exports = {colorArr};

