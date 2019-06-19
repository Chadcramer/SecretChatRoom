const fs = require('fs');
// const readline = require('readline');
var Jimp = require('jimp');
var convert = require('color-convert');

// Step one: resize original image

// Jimp.read('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', (err, image) => {
//     if (err) throw err;
//     image
//       .resize(151, 120) // resize
//       .quality(95) // set JPEG quality
//       .write('../testimg.jpg'); // save
//   });

// Step two: Convert pixels to RGB colors, save to text file

// Jimp.read("/Users/chadcramer/Desktop/HrImmersive/SecretChatRoom/testimg.jpg", function (err, image) {
//     for(let i = 0; i < 120; i++){
//         for(let j = 0; j < 151; j++){
//             fs.appendFileSync('/Users/chadcramer/Desktop/HrImmersive/SecretChatRoom/data/picData.txt', Object.values((Jimp.intToRGBA(image.getPixelColor(j, i)))) + '\n')
//             // fs.appendFileSync('../data/picData.txt', JSON.stringify((Jimp.intToRGBA(image.getPixelColor(i, j)))))
//             // console.log(Jimp.intToRGBA(image.getPixelColor(i, j))); // returns the colour of that pixel e.g. 0xFFFFFFFF
//         }
//     }
// });


// Step three: Convert RGB colors to HSL and then push closest color to single array

let colorArr = [];
let fromRBGtoHsv = function () {
    let hslArray = [];
    let temp = fs.readFileSync('/Users/chadcramer/Desktop/HrImmersive/SecretChatRoom/data/picData.txt', 'utf8');
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
            // if(h > 45 || h < 70){ colorArr.push('Yellow')}
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
    console.log(colorArr);

    // fs.writeFileSync('/Users/chadcramer/Desktop/HrImmersive/SecretChatRoom/data/colorArrData.txt', colorArr);
}

fromRBGtoHsv();

module.exports = {colorArr};