import kuler from 'kuler';
import * as color from 'randomcolor';

//Random color via the randomcolor library
let randomColorPicker = color.randomColor();
console.log(kuler(randomColorPicker, randomColorPicker));

// Color based on request
let randomColorRequest = color.randomColor({
  luminosity: 'light',
  hue: 'blue',
});
console.log(randomColorRequest);

let allLines = '';
let fullLine = '###############################\n';
let halfLine = '#####                     #####\n';
let middleLine = `#####       ${randomColorPicker}       #####\n`;

let rows = 9;
for (let n = 1; n <= rows; n++) {
  if (n < 4 || n > 6) {
    //console.log(fullLine);
    allLines += fullLine;
  } else if (n === 4 || n === 6) {
    //console.log(halfLine);
    allLines += halfLine;
  } else {
    //console.log(middleLine);
    allLines += middleLine;
  }
}
console.log(kuler(allLines, randomColorPicker));
