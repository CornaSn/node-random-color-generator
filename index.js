import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

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
    allLines += fullLine;
  } else if (n === 4 || n === 6) {
    allLines += halfLine;
  } else {
    allLines += middleLine;
  }
}
console.log(kuler(allLines, randomColorRequest));
