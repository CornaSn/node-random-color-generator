import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

// Random color via the randomcolor library
// let randomColorPicker = color.randomColor();
// console.log(kuler(randomColorPicker, randomColorPicker));

// Color based on request

const hue = argv[2];
const luminosity = argv[3];

const randomColorRequest = randomColor({
  luminosity: luminosity,
  hue: hue,
});

// Variables for the pattern
let allLines = '';
const fullLine = '###############################\n';
const halfLine = '#####                     #####\n';
const middleLine = `#####       ${randomColorRequest}       #####\n`;

// Loop for the '#' pattern
const rows = 9;
for (let n = 1; n <= rows; n++) {
  if (n < 4 || n > 6) {
    // console.log(fullLine);
    allLines += fullLine;
  } else if (n === 4 || n === 6) {
    // console.log(halfLine);
    allLines += halfLine;
  } else {
    // console.log(middleLine);
    allLines += middleLine;
  }
}
console.log(kuler(allLines, randomColorRequest));
